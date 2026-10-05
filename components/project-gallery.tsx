'use client';
import { useState } from 'react';
import { projects, type Filter } from '@/data/projects';
import { ProjectCard } from './editorial';
const filters = ['All','Residential','Commercial','Interior','Architecture','Build'] as const;
export default function ProjectGallery() { const [filter,setFilter]=useState<string>('All'); const visible=projects.filter(p=>filter==='All'||p.category.includes(filter as Filter)); return <><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><p className="muted filter-note">Project placeholders · Categories shown only where supplied. Interior, Architecture, and Build tags await verified scope.</p><div className="project-grid" aria-live="polite">{visible.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}{!visible.length && <p className="empty-state">No verified {filter.toLowerCase()} project entries yet. Explore all project placeholders or contact us about your space.</p>}</div></>; }
