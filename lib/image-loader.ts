'use client';
export default function imageLoader({src,width}:{src:string;width:number;quality?:number}){return src.startsWith('/images/')?`${src.replace(/\.[^.]+$/,'')}-${width}.webp`:src;}
