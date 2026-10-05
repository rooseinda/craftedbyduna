import type { Metadata } from 'next';
import { site } from '@/config/site';
export function pageMetadata(title:string,path:string,description=site.description):Metadata{return {title,description,alternates:{canonical:`${site.url}${path}`},openGraph:{title:`${title} | CraftedByDuna`,description,url:`${site.url}${path}`,type:'website'},twitter:{card:'summary',title:`${title} | CraftedByDuna`,description}};}
