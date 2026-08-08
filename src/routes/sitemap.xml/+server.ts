import { getAllPosts } from '$lib/horizon/posts.js';
import { site } from '$lib/content/site';

// Baked into the build output — no serverless hit, no hand-maintained file to drift.
export const prerender = true;

const SITE = site.url;

// Paths must match the <link rel="canonical"> in each page's <svelte:head>.
const staticPaths = ['/', '/about', '/art', '/blog', '/projects'];

/** posts.js hands back dates as 2025.03.24; <lastmod> wants 2025-03-24 */
function toIsoDate(date: string) {
	return date.replace(/\./g, '-');
}

function url(loc: string, lastmod?: string) {
	return ['\t<url>', `\t\t<loc>${loc}</loc>`, lastmod ? `\t\t<lastmod>${lastmod}</lastmod>` : null, '\t</url>']
		.filter(Boolean)
		.join('\n');
}

export function GET() {
	const entries = [
		...staticPaths.map((path) => url(`${SITE}${path}`)),
		...getAllPosts().map((post) => url(`${SITE}/blog/${post.slug}`, toIsoDate(post.date)))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'content-type': 'application/xml' }
	});
}
