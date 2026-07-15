import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { companyData, navItems } from '../../data/siteData'
import { whatsappUrl } from '../../utils/whatsapp'
import { VertexMark } from '../visual/VertexMark'

export function Header() {
  const [scrolled,setScrolled]=useState(false), [open,setOpen]=useState(false), [active,setActive]=useState('inicio')
  useEffect(()=>{const onScroll=()=>{setScrolled(scrollY>24); const sections=navItems.map(n=>document.querySelector(n.href)).filter(Boolean) as HTMLElement[]; const current=[...sections].reverse().find(s=>s.getBoundingClientRect().top<=140); if(current)setActive(current.id)}; onScroll(); addEventListener('scroll',onScroll,{passive:true}); return()=>removeEventListener('scroll',onScroll)},[])
  useEffect(()=>{document.body.style.overflow=open?'hidden':''; const esc=(e:KeyboardEvent)=>e.key==='Escape'&&setOpen(false); addEventListener('keydown',esc); return()=>{document.body.style.overflow='';removeEventListener('keydown',esc)}},[open])
  return <header className={`header ${scrolled?'is-scrolled':''}`}><div className="header-inner"><a className="brand" href="#inicio" aria-label="Vertex - início"><VertexMark/><span><b>{companyData.name}</b><small>DIGITAL SOLUTIONS</small></span></a><nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(n=><a className={active===n.href.slice(1)?'active':''} key={n.href} href={n.href}>{n.label}</a>)}</nav><a className="header-cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Solicitar orçamento<ArrowUpRight/></a><button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu">{open?<X/>:<Menu/>}</button></div>
    <div id="mobile-menu" className={`mobile-menu ${open?'is-open':''}`} aria-hidden={!open}><nav>{navItems.map((n,i)=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{n.label}</a>)}</nav><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Solicitar orçamento<ArrowUpRight/></a><p>{companyData.slogan}</p></div></header>
}
