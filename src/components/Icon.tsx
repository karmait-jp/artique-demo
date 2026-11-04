export function Icon({name, size=20}:{name:'arrow'|'heart'|'menu'|'close'|'expand'|'check';size?:number}) {
 const paths = {arrow:<><path d="M4 12h16M13 5l7 7-7 7"/></>,heart:<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,menu:<><path d="M3 7h18M3 17h18"/></>,close:<path d="m6 6 12 12M6 18 18 6"/>,expand:<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>,check:<path d="m4 12 5 5L20 6"/>};
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">{paths[name]}</svg>;
}
