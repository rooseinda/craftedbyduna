# Deployment — CraftedByDuna

## Recommended: Cloudflare Pages (static Next.js export)

The project intentionally uses `output: 'export'` and `trailingSlash: true`. No runtime server, paid image service, database, or credentials are required. Next/image is supported through build-time responsive local WebP files. This matches Cloudflare's static Next.js Pages guidance: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/ and https://nextjs.org/docs/app/guides/static-exports . Server features would require a separate deployment approach.

1. Create a GitHub repository and commit the contents of this project, including pnpm-lock.yaml. Do not commit .env.local, node_modules, .next, or secrets.
2. Push the project to GitHub. Keep the project at repository root, or set the hosting root directory to the project's subfolder.
3. In Cloudflare, create a Pages project using Git integration and connect that repository.
4. Select the Next.js Static HTML Export preset if present. Build command: `pnpm install --frozen-lockfile && pnpm build`. Output directory: `out`. Use a current supported Node 24 LTS build image and pnpm 11. If necessary set NODE_VERSION=24 and PNPM_VERSION=11.19.0 using the provider's documented version controls.
5. Set public build variables from .env.example. Required for accurate SEO: NEXT_PUBLIC_SITE_URL. Confirmed contact variables are needed for a functioning contact channel; other variables are optional. Blank analytics IDs remain inactive.
6. Choose `craftedbyduna` as the Pages project name if available. Desired URL: https://craftedbyduna.pages.dev. If unavailable, choose another available project name and set NEXT_PUBLIC_SITE_URL to that exact origin. The subdomain is not reserved by this project.
7. Deploy. Check the build logs, open every route, and confirm hero images, project filters, form validation, and WhatsApp behavior. Test an actual inquiry only after configuring the intended recipient.
8. HTTPS is provided on the Pages subdomain. Verify https://your-project.pages.dev/sitemap.xml and /robots.txt. Confirm canonical URLs contain the actual origin. Rebuild if they do not.

## Fallback: Vercel

Connect the same GitHub repository to Vercel. Use the Next.js framework preset, pnpm install, build command `pnpm build`, and static output `out` (if an explicit output directory is requested). This project uses static export on Vercel too. Set the same build variables, including the actual HTTPS origin. Desired URL: https://craftedbyduna.vercel.app, subject to availability. If unavailable, use the assigned available project name and rebuild with its origin. Vercel Hobby is restricted to non-commercial personal use (https://vercel.com/docs/plans/hobby), so it is NOT an appropriate free plan for this company website. Vercel deployment is supported, but commercial use requires a suitable plan and may be paid. Cloudflare Pages is the free recommendation for this studio.

## Future custom domain: craftedbyduna.com

A custom .com is normally paid and is NOT included automatically with either hosting provider. The source code does not reserve or purchase craftedbyduna.com. Confirm ownership/availability separately; do not buy anything as part of this build.

After you own the domain:
1. Add `craftedbyduna.com` in the hosting project's custom-domain settings.
2. Follow the DNS records shown by the provider. For an apex domain on Cloudflare Pages, add the domain as a Cloudflare zone and follow the nameserver setup; a www subdomain typically uses the Pages CNAME. For Vercel, use the exact A/CNAME records it shows. Do not guess IP addresses.
3. Choose your canonical host (apex or www) and configure the other hostname to redirect to it using the hosting/domain controls.
4. Wait for DNS verification and automatic TLS/HTTPS provisioning. Confirm HTTPS works on both canonical and redirect hosts.
5. Set NEXT_PUBLIC_SITE_URL=https://craftedbyduna.com (or the chosen www origin), rebuild, and redeploy. Recheck all canonicals, structured-data URLs, sitemap, robots, and redirects.
6. Add a Search Console property. Use DNS verification for a domain property, or NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION for a URL-prefix property. Redeploy if using the HTML token. Submit the new sitemap URL and inspect the home and project pages.

## Forms and secrets

The default inquiry flow prepares a message; it does not send emails. Configure confirmed WhatsApp details or the public Formspree endpoint before launch. For Resend, use a private server-side endpoint/Worker with credentials stored only in hosting secrets. Do not expose a secret through NEXT_PUBLIC_. Adding runtime Next.js APIs changes static-export compatibility.

## Final launch checks

Run pnpm lint, pnpm typecheck, pnpm build, and pnpm check:export. Confirm placeholder content is replaced as appropriate, images have descriptive alt text, all routes return successfully, there are no console errors, and forms reach the configured destination. Run Lighthouse on the production URL, including mobile testing. Target 90+ across categories, but verify rather than assuming.

