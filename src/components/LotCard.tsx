import { Link } from 'react-router-dom';
import { type Lot } from '../data/lots';
import { useAuction } from '../state/AuctionContext';
import { lotStatus } from '../state/engine';
import { useLocale } from '../i18n';
import { Icon } from './Icon';
export function Countdown({endsAt,compact=false}:{endsAt:number;compact?:boolean}) {
 const {now}=useAuction();const {t}=useLocale();const remaining=Math.max(0,Math.ceil((endsAt-now)/1000));if(!remaining)return <span>{t('closed')}</span>;
 const d=Math.floor(remaining/86400),h=Math.floor(remaining%86400/3600),m=Math.floor(remaining%3600/60),s=remaining%60;
 return <span className={`countdown ${!d&&h<1?'soon':''}`}>{d>0?`${d}${t('days')} `:''}{`${String(h).padStart(2,'0')}${t('hours')} ${String(m).padStart(2,'0')}${t('minutes')}`}{!compact||!d?` ${String(s).padStart(2,'0')}${t('seconds')}`:''}</span>;
}
export function LotCard({lot}:{lot:Lot}) {
 const {state,now,toggleWatch}=useAuction();const {t,money}=useLocale();const entry=state.lots[lot.id];const status=lotStatus(entry,now);
 return <article className="lot-card"><div className="lot-card-image"><Link to={`/lot/${lot.id}`} aria-label={`${lot.id} · ${lot.title[lot.sourceLang]}`}><img src={`${import.meta.env.BASE_URL}${lot.image}`} alt={lot.title[lot.sourceLang]} loading="lazy"/></Link><button className={`watch-button ${entry.watched?'is-watched':''}`} aria-label={entry.watched?t('watching'):t('watch')} aria-pressed={entry.watched} onClick={()=>toggleWatch(lot.id)}><Icon name="heart" size={17}/></button></div><div className="lot-card-heading"><span className="eyebrow">{t('lot')} {lot.id}</span>{status==='leading'||status==='outbid'||status==='won'?<span className={`card-status ${status==='outbid'?'is-outbid':'is-leading'}`}>{t(status==='leading'?'leadingShort':status==='outbid'?'outbidShort':'won')}</span>:null}</div><Link to={`/lot/${lot.id}`} className="lot-title-link"><h3 lang={lot.sourceLang}>{lot.title[lot.sourceLang]}</h3></Link><p className="card-attribution" lang={lot.sourceLang}>{lot.attribution[lot.sourceLang]}</p>{lot.estimateLow!==undefined&&lot.estimateHigh!==undefined&&<p className="card-estimate">{t('estimate')} {money(lot.estimateLow)}–{money(lot.estimateHigh)}</p>}<div className="card-bid"><span>{t(entry.bids.length?'currentBid':'startingPrice')}<strong>{money(entry.bids.length?entry.currentBid:entry.startingPrice)}</strong></span><Countdown endsAt={entry.endsAt} compact/></div></article>;
}
export function ClosingTime({at}:{at:number}) {
 const {locale,t}=useLocale();const localZone=Intl.DateTimeFormat().resolvedOptions().timeZone;const format=(zone:string)=>new Intl.DateTimeFormat(locale,{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:zone}).format(at);
 return <span className="closing-time">{format('Europe/Paris')} · {t('paris')}{localZone!=='Europe/Paris'&&format(localZone)!==format('Europe/Paris')&&<span>{format(localZone)} · {t('localTime')}</span>}</span>;
}
