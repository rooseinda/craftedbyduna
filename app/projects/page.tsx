import { PageIntro, FinalCTA, Breadcrumbs } from '@/components/editorial';
import ProjectGallery from '@/components/project-gallery';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Projects','/projects/');
export default function Projects(){return <><Breadcrumbs title="Projects" path="/projects/"/><PageIntro eyebrow="Project collection" title="Spaces, and the stories behind them."><p>Explore the collection by space or discipline. Verified details and studio photographs will replace the clearly marked placeholders.</p></PageIntro><section className="wrap gallery-section"><ProjectGallery/></section><FinalCTA/></>;}
