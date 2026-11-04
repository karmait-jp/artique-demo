import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

const assumptions = JSON.parse(await readFile(new URL('../data/assumptions.json', import.meta.url), 'utf8'));
async function loadRules(source) {
  const result = await build({
    entryPoints: ['src/config/rules.ts'], bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent',
    plugins: source === undefined ? [] : [{ name: 'assumptions-fixture', setup(builder) {
      builder.onLoad({ filter: /[/\\]data[/\\]assumptions\.json$/ }, () => ({ contents: JSON.stringify(source), loader: 'json' }));
    } }],
  });
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (...args) => warnings.push(args.join(' '));
  try {
    const module = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
    return { ...module, warnings };
  } finally { console.warn = originalWarn; }
}
const current = await loadRules();
assert.deepEqual(current.warnings, [], 'Current assumptions must parse without falling back');
assert.deepEqual(current.rules, current.defaultRules, 'Parsed rules have drifted from the explicit defaults');

// Exercise failures in memory, without changing the planning document.
for (const source of [
  { ...assumptions, items: [] },
  { ...assumptions, items: assumptions.items.map(item => ({ ...item, value_en: 'Wording has changed.' })) },
]) {
  const result = await loadRules(source);
  assert.deepEqual(result.rules, result.defaultRules);
  const ids = result.warnings.map(warning => warning.match(/assumption (\w+);/)?.[1]);
  assert.ok(ids.length > 0 && ids.every(Boolean), 'Warnings include assumption IDs');
  assert.equal(new Set(ids).size, ids.length, 'Warn only once per assumption');
}
const replaceValue = (id, transform) => ({ ...assumptions, items: assumptions.items.map(item => item.id === id ? { ...item, value_en: transform(item.value_en) } : item) });
for (const transform of [
  value => value.split(' · ').slice(0, -1).join(' · '),
  value => value.replace('€300–499: €20', 'Band unavailable'),
  value => value.replace('€300–499: €20', '€300–499: not specified'),
]) {
  const result = await loadRules(replaceValue('B4', transform));
  assert.deepEqual(result.rules, result.defaultRules, 'Incomplete or invalid increment tables fall back in full');
  assert.equal(result.warnings.length, 1);
  assert.match(result.warnings[0], /B4/);
}
const nonfinite = await loadRules(replaceValue('B2', value => value.replace('60 seconds apart', `${'9'.repeat(400)} seconds apart`)));
assert.deepEqual(nonfinite.rules, nonfinite.defaultRules, 'Non-finite numeric matches fall back');
assert.equal(nonfinite.warnings.length, 1);
assert.match(nonfinite.warnings[0], /B2/);
const changed = await loadRules(replaceValue('B7', value => value.replace('premium provisionally 25%', 'premium provisionally 26%')));
assert.equal(changed.rules.buyerPremium, 0.26, 'Valid values still come from assumptions');
assert.deepEqual(changed.warnings, []);


const changedCap=await loadRules(replaceValue('B12',value=>value.replace('€9,999','€8,999')));
assert.equal(changedCap.rules.maxLotAmount,8999);
const changedPayout=await loadRules(replaceValue('B9',value=>value.replace('15th','16th')));
assert.equal(changedPayout.rules.payoutDay,16);
assert.equal(current.rules.antiSnipingMs,0);

async function loadModule(path) {
  const result=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'esm',logLevel:'silent'});
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}
const {matchingVocabulary}=await loadModule('src/data/vocabulary.ts');
for(const [phrase,id] of [
  ['Signé Hiroshige','signed'],['Photographie signée','signed'],['signed print','signed'],['署名あり','signed'],
  ['Attribué à un artiste','attributed'],['attributed to','attributed'],['伝 山田','attributed'],
  ['École de Paris','school'],['school of','school'],['Atelier de','workshop'],['workshop of','workshop'],
  ["D’après",'after'],['after','after'],['dans le goût de','manner'],['in the manner of','manner'],
  ['période Edo','period'],['circa 19th century','period'],['circa XIXe siècle','period'],
]) assert.ok(matchingVocabulary(phrase).some(term=>term.id===id),`Vocabulary warning for ${phrase}`);
assert.equal(matchingVocabulary('An unsigned print on paper').length,0);
assert.equal(matchingVocabulary('circa').length,0);
const {frenchAssumptions}=await loadModule('src/i18n/support.ts');
assert.equal(Object.keys(frenchAssumptions).length,assumptions.items.length);
for(const item of assumptions.items) {
  assert.ok(frenchAssumptions[item.id]?.label&&frenchAssumptions[item.id]?.value,`French translation ${item.id}`);
  assert.ok(assumptions.statuses[item.status]);
}
console.log('Rules verification passed: numeric parsing and fallbacks, current fees and caps, monthly payout, vocabulary in all listing languages, and all French assumptions.');
