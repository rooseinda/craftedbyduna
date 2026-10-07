import Link from 'next/link';
import { Photo, TextLink, ProjectCard, Flow, FinalCTA, Testimonials } from '@/components/editorial';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
export default function Home() { return <>
<section className="hero">
	<Photo src="/images/projects/reference-1.jpg" alt="Stock reference: warm living room with natural light; not CraftedByDuna work" priority/>
		<div className="hero-shade"/>
			<div className="hero-copy">
				<p className="eyebrow">Interior. Architecture. Build.</p>
				<h1>Spaces Designed<br/>to <em>Flow.</em></h1>
				<p>One integrated process.<br/>From concept to completion.</p>
				<div className="button-row">
					<Link href="/projects/" className="button light">View Our Projects</Link>
					<Link href="/contact/" className="hero-secondary">Start a Project</Link>
				</div>
			</div>
		<div className="hero-foot">
			<span>JAKARTA, INDONESIA</span>
			<span>Stock photograph · visual reference</span>
			<a href="#introduction">Discover the studio <span aria-hidden="true">↓</span></a>
		</div>
</section>
<section id="introduction" className="intro-section wrap">
	<p className="eyebrow">01 / The studio</p>
	<div>
		<h2>We design spaces<br/>that <em>work beautifully.</em></h2>
		<div className="intro-columns">
			<p>Good design connects the way a space looks with the way it works. We bring Interior, Architecture, and Build into one integrated process.</p>
			<p>Fewer gaps between separate vendors. More consistency from the first sketch to the final detail. Spaces shaped around the people and businesses that use them.</p>
		</div>
		<TextLink href="/about/">Meet CraftedByDuna</TextLink>
	</div>
</section>
<section className="services-section wrap">
	<div className="section-heading">
		<p className="eyebrow">02 / Connected disciplines</p>
		<h2>One team.<br/><em>Every perspective.</em></h2>
	</div>
	<div className="service-list">{services.map(s=>
		<Link className="service-row" href={`/services/#${s.title.toLowerCase()}`} key={s.title}>
		<span className="eyebrow">{s.number}</span>
		<h3>{s.title}</h3>
		<p>{s.description}</p>
		<span aria-hidden="true">＋</span>
		</Link>)}
	</div>
	<TextLink href="/services/">Explore Our Services</TextLink>
</section>
<section className="projects-section wrap">
	<div className="section-heading">
		<div>
			<p className="eyebrow">03 / Project collection</p>
			<h2>A sense <em>of place.</em></h2>
		</div>
		<TextLink href="/projects/">View all projects</TextLink>
	</div>
	<p className="muted collection-note">A preview of the project collection. Entries and stock photographs below are clearly marked placeholders, awaiting real project stories.</p>
	<div className="project-grid">{projects.slice(0,4).map((p,i)=>
		<ProjectCard key={p.slug} project={p} index={i}/>)}
	</div>
</section>
<section className="philosophy">
	<div className="wrap philosophy-grid">
		<Photo src="/images/projects/reference-2.jpg" alt="Stock reference of an interior, illustrating natural light and practical space"/>
		<div>
			<p className="eyebrow">04 / Function comes first</p>
			<h2>Not just designed<br/>to be seen.<br/><em>Designed to<br/>be lived in.</em></h2>
			<p>Where you pause. How you move. What you need within reach. A space should respond to daily life with as much care as it responds to the eye.</p>
			<TextLink href="/about/#philosophy">Our design philosophy</TextLink>
		</div>
	</div>
		<p className="wrap image-note">Stock photography · visual reference</p>
</section>
<section className="process-section wrap">
		<div className="section-heading">
			<div>
				<p className="eyebrow">05 / A continuous flow</p>
				<h2>From possibility<br/><em>to a place of your own.</em></h2>
			</div>
			<TextLink href="/process/">Our Process</TextLink>
		</div>
	<Flow/>
</section>
<section className="spaces-section wrap">
	<div>
		<p className="muted">Based in Jakarta, with a focus on West Jakarta and surrounding areas. For projects further afield and property-agent partnerships, let’s discuss the fit.</p>
		<TextLink href="/contact/">Tell us about your space</TextLink>
	</div>
</section>
<Testimonials/>
<FinalCTA/>
</>; }
