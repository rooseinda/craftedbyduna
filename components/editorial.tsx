import Image from 'next/image';
import Link from 'next/link';
import { site, whatsappUrl } from '@/config/site';
import { phases } from '@/data/process';
import { testimonials } from '@/data/testimonials';
import type { Project } from '@/data/projects';
export function Photo({src, alt, priority = false, className = ''}: {src:string;alt:string;priority?:boolean;className?:string}) { return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 60vw, 1280px" priority={priority}/></div>; }
export function TextLink({href, children}: {href:string;children:React.ReactNode}) { return <Link className="text-link" href={href}>{children}<span aria-hidden="true">＋</span></Link>; }
export function PageIntro({eyebrow,title,children}: {eyebrow:string;title:string;children?:React.ReactNode}) { return <section className="page-intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="intro-copy">{children}</div>}</section>; }
export function ProjectCard({project,index = 0}: {project:Project;index?:number}) { return <Link href={`/projects/${project.slug}/`} className={`project-card project-${index % 2}`}><Photo src={project.coverImage} alt={project.placeholder ? `Stock interior reference for ${project.title}; not CraftedByDuna work` : `${project.title} project`}/><div className="project-meta"><h3>{project.title}</h3><span>0{index+1}</span></div><p className="project-caption">{project.category.length ? project.category.join(' / ') : 'Category to be confirmed'} <span>{project.placeholder ? '· Project placeholder' : [project.location, project.year].filter(Boolean).join(' · ')}</span></p></Link>; }
export function Flow({full = false}: {full?:boolean}) { return <ol className={`flow ${full ? 'flow-full' : ''}`}>{phases.map(([title,copy],i)=><li key={title}><span className="flow-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>; }
export function FinalCTA() { return <section className="final-cta wrap"><p className="eyebrow">A new beginning</p><h2>Have a space<br/><em>in mind?</em></h2><div><p>Let’s turn the idea into a space that works.</p><div className="button-row"><Link href="/contact/" className="button dark">Start a Project</Link><Link href={whatsappUrl()} className="button outline">{site.whatsapp ? 'WhatsApp Us' : 'WhatsApp · details pending'}</Link></div></div></section>; }
export function Testimonials() 
{ return 
	<section className="testimonials wrap">
		<p className="eyebrow">Client perspectives</p>
		{testimonials.filter(t=>t.verified).length ? testimonials.filter(t=>t.verified).map(t=>
			<figure key={t.name}>
				<blockquote>{t.quote}</blockquote>
				<figcaption>{t.name} · {t.project}</figcaption>
			</figure>) : <>
		<h2>Trust grows<br/><em>through the work.</em></h2>
		<p className="muted">Testimonial placeholder — approved client stories will appear here. No sample client quotes are presented.</p>
		</>}
	</section>; 
}
export function JsonLd({data}: {data:unknown}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>; }
export function Breadcrumbs({title,path}: {title:string;path:string}) { return <><nav aria-label="Breadcrumb" className="breadcrumbs wrap"><Link href="/">Home</Link><span>/</span><span aria-current="page">{title}</span></nav><JsonLd data={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.url},{'@type':'ListItem',position:2,name:title,item:site.url+path}]}}/></>; }

