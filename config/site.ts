export const site = {
 name:'CRAFTEDBYDUNA', url:(process.env.NEXT_PUBLIC_SITE_URL || 'https://craftedbyduna.pages.dev').replace(/\/$/,''),
 description:'CraftedByDuna is an Interior, Architecture, and Build studio in Jakarta creating functional residential and commercial spaces from concept to completion.', location:'Jakarta, Indonesia',
 email:process.env.NEXT_PUBLIC_EMAIL||'', whatsapp:(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'6282321274886').replace(/\D/g,''),
 whatsappMessage: "Hello CraftedByDunarra! I'm interested in your interior design services and would like to discuss a project.",
 socials:{Instagram:process.env.NEXT_PUBLIC_INSTAGRAM_URL||'',TikTok:process.env.NEXT_PUBLIC_TIKTOK_URL||'',Facebook:process.env.NEXT_PUBLIC_FACEBOOK_URL||''},
 formEndpoint:process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT||'', flowStory:'We think of a project as a continuous flow: one conversation, connected decisions, and a clear path from idea to space.',
};
export const navigation=[['Home','/'],['About','/about/'],['Services','/services/'],['Projects','/projects/'],['Process','/process/'],['Contact','/contact/']] as const;
export function whatsappUrl(message=site.whatsappMessage){return site.whatsapp?`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`:'/contact/#contact-options';}
