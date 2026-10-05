import sharp from 'sharp';
import { readdir, access } from 'node:fs/promises';
import path from 'node:path';
const widths=[320,480,640,960,1280,1920,32,48,64,96,128,256,384,750,828,1080,1200,2048,3840];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())await walk(full);else if(/\.(jpg|jpeg|png)$/i.test(entry.name)){for(const width of widths){const dest=full.replace(/\.[^.]+$/,`-${width}.webp`);await sharp(full).rotate().resize({width}).webp({quality:78}).toFile(dest);}}}}
await access('public/images/projects/reference-1.jpg');
await walk('public/images');
console.log('Responsive local WebP images prepared.');
