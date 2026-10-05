'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation, site } from '@/config/site';
export default function Header() { const [open,setOpen]=useState(false); const path=usePathname(); return <header className="header"><Link href="/" className="wordmark" aria-label="CraftedByDuna home">CRAFTED<span>BY</span>DUNA<span className="brand-period">.</span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}<span aria-hidden="true">{open?'×':'☰'}</span></button><nav id="main-nav" aria-label="Main navigation" className={open?'nav open':'nav'} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{navigation.map(([label,href])=><Link key={href} href={href} aria-current={path===href || (href!=='/' && path.startsWith(href.replace(/\/$/,'')))?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact/" onClick={()=>setOpen(false)}>Start a Project</Link></nav><span className="sr-only">{site.location}</span></header>; }
