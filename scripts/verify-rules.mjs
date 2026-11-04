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
const nonfinite = await loadRules(replaceValue('B2', value => value.replace('last 2 minutes', `last ${'9'.repeat(400)} minutes`)));
assert.deepEqual(nonfinite.rules, nonfinite.defaultRules, 'Non-finite numeric matches fall back');
assert.equal(nonfinite.warnings.length, 1);
assert.match(nonfinite.warnings[0], /B2/);
const changed = await loadRules(replaceValue('B7', value => value.replace('premium 15%', 'premium 16%')));
assert.equal(changed.rules.buyerPremium, 0.16, 'Valid values still come from assumptions');
assert.deepEqual(changed.warnings, []);
console.log('Rules verification passed: current values match defaults, parsing remains live, and invalid or missing assumptions safely fall back with one warning per ID.');
