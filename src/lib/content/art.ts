/* A balanced masonry. The browser evens the columns, so adding a piece is one entry here
   and nothing else — no layout maths, no per-image placement.

   Two things worth knowing before you reorder:

   Order is the only composition tool a balanced fill gives you. It is greedy, so the run
   of heights decides which column each piece lands in and where the ragged bottom ends up.

   `cap` limits a piece's height in rem, and exists because aspect ratio is a bad proxy for
   how much room a piece deserves. Something very tall will otherwise take several times the
   area of everything else for no reason but its crop. Plate 04 is capped to show the effect.

   Each piece wants two files in static/art: `<src>.webp` and `<src>-800.webp`. `w` and `h`
   are the full-size dimensions and must be right, or the page will jump as images load. */

export interface Plate {
	src: string;
	w: number;
	h: number;
	alt: string;
	cap?: number;
}

export const plates: Plate[] = [
	{ src: 'plate-2', w: 983, h: 1400, alt: 'Placeholder plate 02.' },
	{ src: 'plate-1', w: 730, h: 730, alt: 'Placeholder plate 01.' },
	{ src: 'plate-6', w: 1080, h: 1048, alt: 'Placeholder plate 06.' },
	{ src: 'plate-4', w: 586, h: 1400, alt: 'Placeholder plate 04.', cap: 32 },
	{ src: 'plate-5', w: 1400, h: 1400, alt: 'Placeholder plate 05.' },
	{ src: 'plate-3', w: 1080, h: 1177, alt: 'Placeholder plate 03.' },
	{ src: 'plate-8', w: 1200, h: 1600, alt: 'Placeholder plate 08.' },
	{ src: 'plate-7', w: 1157, h: 1400, alt: 'Placeholder plate 07.' },
	{ src: 'plate-9', w: 1400, h: 1323, alt: 'Placeholder plate 09.' }
];
