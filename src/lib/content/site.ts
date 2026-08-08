/* Everything in $lib/content is yours to replace. Nothing outside it needs editing
   to make this site your own. Start here. */

export const site = {
	/* Shown in <title> after the page name, and in the footer. */
	name: 'Horizon',

	/* No trailing slash. Used for canonical links, og:url and the sitemap — set this
	   before you deploy or search engines will index the placeholder. */
	url: 'https://horizon.example',

	description: 'A quiet, dark portfolio for writing, work and pictures.',

	/* The footer is the only place the site names itself. There is no wordmark. */
	footer: 'horizon · v3',

	email: 'hello@example.com',

	/* Labels and routes are allowed to differ — rename a label without breaking a link. */
	nav: [
		{ label: 'work', href: '/projects' },
		{ label: 'writing', href: '/blog' },
		{ label: 'art', href: '/art' },
		{ label: 'about', href: '/about' }
	],

	/* Set either to null to drop that icon from the about page. */
	social: {
		github: 'https://github.com/your-handle',
		x: null as string | null
	}
};
