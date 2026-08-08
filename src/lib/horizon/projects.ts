/* Design system, not content. The project list itself lives in $lib/content/projects.ts. */

export type Status = 'live' | 'shipping' | 'building' | 'writing' | 'paused' | 'archived';

export interface Project {
	id: number;
	title: string;
	description: string;
	tech: string[];
	status: Status;
	/* One destination, because the whole card is the link. Null means nothing to open yet. */
	link: { label: string; url: string } | null;
	/* Recorded, not rendered — one dated card among many reads as a bug, not a detail. */
	started?: string;
	feature?: boolean;
}

/* Heat is recency: live burns at the photon ring, archived has redshifted out. */
export const heat: Record<Status, string> = {
	live: 'var(--k5)',
	shipping: 'var(--k5)',
	building: 'var(--k4)',
	writing: 'var(--k4)',
	paused: 'var(--k3)',
	archived: 'var(--k2)'
};
