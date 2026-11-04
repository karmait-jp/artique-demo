import { useCallback, useMemo } from 'react';
import { useAuction } from '../state/AuctionContext';
import en, { type TranslationKey } from './en';
import fr from './fr';
import ja from './ja';
export type { TranslationKey } from './en';
export const dictionaries = { en, fr, ja };
export function useLocale() {
 const { state } = useAuction();
 const lang = state.language;
 const locale = { fr:'fr-FR', en:'en-GB', ja:'ja-JP' }[lang];
 const formatter = useMemo(() => new Intl.NumberFormat(locale, { style:'currency', currency:'EUR', minimumFractionDigits:0, maximumFractionDigits:2 }), [locale]);
 const money = useCallback((n: number) => formatter.format(n), [formatter]);
 const t = useCallback((key: TranslationKey, vars?: Record<string,string|number>) => {
  let value: string = dictionaries[lang][key];
  if(vars) Object.entries(vars).forEach(([k,v])=>{value=value.replaceAll(`{${k}}`,String(v));});
  return value;
 },[lang]);
 const text = useCallback((f:string,e:string,j:string)=>({fr:f,en:e,ja:j})[lang],[lang]);
 return { lang, locale, money, t, text };
}
