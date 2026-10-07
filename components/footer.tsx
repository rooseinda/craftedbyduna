import Link from 'next/link';
import { navigation, site, whatsappUrl } from '@/config/site';
export default function Footer() 
{ return <>
	<footer className="footer">
		<div className="wrap footer-grid">
			<div>
				<Link className="wordmark" href="/">CRAFTED<span>BY</span>DUNA.</Link>
				<p>Interior. Architecture. Build.</p>
				<p>{site.location}<br/>Serving Jakarta and beyond.</p>
			</div>
			<nav aria-label="Footer navigation">{navigation.map(([label,href])=>
				<Link key={href} href={href}>{label}</Link>)}
			</nav>
			<div className="footer-social">{Object.entries(site.socials).map(([label,url])=>url?
				<a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
				:<span key={label}>{label} <small>link pending</small></span>)}
			</div>
			<div>
				<p className="eyebrow">Let’s talk</p>
				<Link className="text-link" href="/contact/">Start a conversation ＋</Link>
				{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
				<p className="muted">{site.whatsapp?'Available on WhatsApp':'Contact details awaiting confirmation'}</p>
			</div>
		</div>
		<div className="wrap footer-bottom">
			<span>© {new Date().getFullYear()} CraftedByDuna</span>
			<span>Designed with purpose. Built with intention.</span>
		</div>
	</footer>
	<Link className="floating-contact" href={whatsappUrl()} aria-label={site.whatsapp?'Discuss a project on WhatsApp':'Contact CraftedByDuna; WhatsApp number pending'}>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
			<path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-5a8 8 0 1 1 15.5-3.5Z"/>
			<path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3-3 1Z"/>
		</svg>
		<span>{site.whatsapp?'WhatsApp':'Let’s talk'}</span>
	</Link>
</>; }
