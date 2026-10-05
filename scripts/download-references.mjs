import { writeFile } from 'node:fs/promises';
const pages=['https://unsplash.com/photos/modern-living-room-with-minimalist-furniture-and-decor-e0oJLc5FYsg','https://unsplash.com/photos/architectural-photography-of-house-interior-view-Dzs1VRqDxsw','https://unsplash.com/photos/modern-minimalist-living-room-with-white-furniture-4r9OKorlcTk'];
const credits=[];
for(let i=0;i<pages.length;i++){
 const r=await fetch(pages[i]);const html=await r.text();
 const match=html.match(/property="og:image"[^>]*content="([^"]+)"/)||html.match(/content="([^"]+)"[^>]*property="og:image"/);
 if(!r.ok||!match)throw new Error(`Cannot resolve photo ${pages[i]}: ${r.status}`);
 const source=match[1].replace(/&amp;/g,'&');const url=new URL(source);url.search='';url.searchParams.set('w','1920');url.searchParams.set('q','85');url.searchParams.set('fm','jpg');
 const image=await fetch(url);if(!image.ok)throw new Error('Image download failed');
 await writeFile(`public/images/projects/reference-${i+1}.jpg`,Buffer.from(await image.arrayBuffer()));credits.push({file:`reference-${i+1}.jpg`,page:pages[i],source,license:'https://unsplash.com/license',note:'Stock reference, not CraftedByDuna work'});console.log(`Downloaded reference ${i+1}`);
}
await writeFile('public/images/credits.json',JSON.stringify(credits,null,2));


