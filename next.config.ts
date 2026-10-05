import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', trailingSlash: true, images: { loader: 'custom', loaderFile: './lib/image-loader.ts', imageSizes: [320, 480], deviceSizes: [640, 960, 1280, 1920] } };
export default config;
