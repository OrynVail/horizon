/* The about page, top to bottom. Sections render only if they have something in them,
   so emptying `trajectory` or `building` removes that block rather than leaving a heading
   over nothing. */

export const about = {
	/* Doubles as the page's <h1> and its meta description, so keep it to a sentence. */
	statement:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor incididunt ut labore.',

	direction: {
		label: 'Direction',
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
			'Sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
		]
	},

	/* A vertical worldline. The axis and its markers hang in the left gutter. */
	trajectory: {
		label: 'In progress',
		nodes: [
			{ year: '2026', title: 'Lorem ipsum dolor sit amet' },
			{ year: '2028', title: 'Consectetur adipiscing elit' },
			{ year: '2031', title: 'Sed do eiusmod tempor' }
		]
	},

	building: {
		label: 'Built and building',
		items: [
			{ name: 'Lorem', note: 'Dolor sit amet, consectetur adipiscing elit.' },
			{ name: 'Ipsum', note: 'Sed do eiusmod tempor incididunt ut labore.' },
			{ name: 'Dolor', note: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
			{ name: 'Consectetur', note: 'Duis aute irure dolor in reprehenderit in voluptate.' }
		]
	},

	contact: {
		label: 'Reaching me',
		blurb: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit.'
	}
};
