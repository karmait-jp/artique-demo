import { useEffect, useRef, type ReactNode } from 'react';
import { Icon } from './Icon';
import { useLocale } from '../i18n';
export function Modal({title, onClose, children, wide=false}:{title:string;onClose:()=>void;children:ReactNode;wide?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);const {t}=useLocale();
 useEffect(()=>{const previous=document.activeElement as HTMLElement; const old=document.body.style.overflow;document.body.style.overflow='hidden';
 const focusable=()=>ref.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]');focusable()?.[0]?.focus();
 const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();if(e.key==='Tab'){const nodes=focusable();if(!nodes?.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
 document.addEventListener('keydown',key);return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',key);previous?.focus();};},[onClose]);
 return <div className={`modal-backdrop ${wide?'image-backdrop':''}`} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={ref} className={`modal ${wide?'image-modal':''}`} role="dialog" aria-modal="true" aria-label={title}><button className="icon-button modal-close" aria-label={t('close')} onClick={onClose}><Icon name="close"/></button>{children}</div></div>;
}
