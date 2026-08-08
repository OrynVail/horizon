import type { Project } from '$lib/horizon/projects';

/* Work sorts by heat, not by date: live and shipping land in "Now", building and writing
   in "In progress", paused and archived in "Left behind". A band with nothing in it does
   not render, so you can start with three projects and one band.

   `link` is a single destination because the whole card is clickable. `feature: true`
   sets one project's title a size larger — use it once, or not at all. */

export const projects: Project[] = [
	{
		id: 6,
		title: 'Lorem Ipsum',
		description:
			'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — ut enim ad minim veniam.',
		tech: ['TypeScript', 'SvelteKit', 'Postgres'],
		status: 'live',
		link: { label: 'github', url: 'https://github.com/your-handle/lorem-ipsum' },
		feature: true
	},
	{
		id: 5,
		title: 'Consectetur',
		description: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		tech: ['Rust', 'WebAssembly'],
		status: 'live',
		link: { label: 'the app', url: 'https://example.com' }
	},
	{
		id: 4,
		title: 'Tempor Incididunt',
		description:
			'Ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tech: ['Python', 'Docker'],
		status: 'building',
		link: null
	},
	{
		id: 3,
		title: 'Magna Aliqua',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		tech: ['Essays', 'Long-form'],
		status: 'writing',
		link: null,
		started: '2025-07-25'
	},
	{
		id: 2,
		title: 'Excepteur Sint',
		description: 'Occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
		tech: ['Go', 'SQLite'],
		status: 'paused',
		link: { label: 'github', url: 'https://github.com/your-handle/excepteur-sint' }
	},
	{
		id: 1,
		title: 'Deserunt Mollit',
		description: 'Anim id est laborum, kept for the record.',
		tech: ['JavaScript'],
		status: 'archived',
		link: { label: 'github', url: 'https://github.com/your-handle/deserunt-mollit' }
	}
];
