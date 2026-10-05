import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Analytics from '@/components/analytics';
import { JsonLd } from '@/components/editorial';
import { site } from '@/config/site';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(site.url),title:{default:'CraftedByDuna | Interior, Architecture & Build Jakarta',template:'%s | CraftedByDuna'},description:site.description,alternates:{canonical:site.url+'/'},openGraph:{title:'CraftedByDuna | Interior, Architecture & Build Jakarta',description:site.description,url:site.url,siteName:'CraftedByDuna',locale:'en_ID',type:'website'},twitter:{card:'summary',title:'CraftedByDuna | Interior, Architecture & Build Jakarta',description:site.description},icons:{icon:'/favicon.svg'},verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION||undefined}};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><JsonLd data={{'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':site.url+'/#organization',name:'CraftedByDuna',url:site.url,...(site.email?{email:site.email}:{}),sameAs:Object.values(site.socials).filter(Boolean)},{'@type':'ProfessionalService','@id':site.url+'/#studio',name:'CraftedByDuna',url:site.url,description:site.description,address:{'@type':'PostalAddress',addressLocality:'Jakarta',addressCountry:'ID'},areaServed:[{'@type':'City',name:'Jakarta'},{'@type':'Place',name:'West Jakarta'}],...(site.whatsapp?{telephone:'+'+site.whatsapp}:{})}]}}/><Analytics/></body></html>; }

