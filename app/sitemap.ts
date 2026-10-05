import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { projects } from '@/data/projects';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','about/','services/','projects/','process/','contact/',...projects.map(p=>`projects/${p.slug}/`)].map(path=>({url:`${site.url}/${path}`}));}
