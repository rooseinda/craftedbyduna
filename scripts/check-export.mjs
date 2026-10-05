import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
const failures=[];const htmlFiles=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const full=path.join(dir,e.name);if(e.isDirectory())await walk(full);else if(e.name.endsWith('.html'))htmlFiles.push(full);}}
await walk('out');
for(const file of htmlFiles){const html=await readFile(file,'utf8');
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=m[1].replace(/&amp;/g,'&');if(!url.startsWith('/')||url.startsWith('//'))continue;const raw=url.split(/[?#]/)[0];const dest=path.join('out',raw.endsWith('/')?raw+'index.html':raw);try{await access(dest);}catch{failures.push(`${file}: missing ${url}`);}}
 for(const m of html.matchAll(/<img\b[^>]*>/g)){if(!/\balt="[^"]+"/.test(m[0]))failures.push(`${file}: missing image alt`);}
 if(!html.includes('<h1'))failures.push(`${file}: missing h1`);
 for(const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)){try{JSON.parse(m[1]);}catch{failures.push(`${file}: invalid JSON-LD`);}}
}
for(const file of ['sitemap.xml','robots.txt','about/index.html','services/index.html','projects/index.html','process/index.html','contact/index.html']){try{await access(path.join('out',file));}catch{failures.push(`Missing ${file}`);}}
const sitemap=await readFile('out/sitemap.xml','utf8');const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);if(locations.length!==12)failures.push(`Expected 12 sitemap URLs, got ${locations.length}`);
if(failures.length){console.error(failures.join('\n'));process.exit(1);}console.log(`Passed: ${htmlFiles.length} exported HTML files, internal assets/links, alt attributes, JSON-LD, 12 sitemap routes, and robots.`);
