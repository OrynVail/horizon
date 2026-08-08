<script lang="ts">
	import Limb from '$lib/components/horizon/Limb.svelte';
	import { heat, type Status } from '$lib/horizon/projects';
	import { projects } from '$lib/content/projects';
	import { site } from '$lib/content/site';

	/* Writing is sorted by time, so work is sorted by heat — otherwise the two pages are twins. */
	const bands: { key: string; label: string; match: Status[] }[] = [
		{ key: 'now', label: 'Now', match: ['live', 'shipping'] },
		{ key: 'building', label: 'In progress', match: ['building', 'writing'] },
		{ key: 'past', label: 'Left behind', match: ['paused', 'archived'] }
	];

	const grouped = bands
		.map((band) => ({ ...band, items: projects.filter((p) => band.match.includes(p.status)) }))
		.filter((band) => band.items.length);
</script>

<svelte:head>
	<title>Work — {site.name}</title>
	<meta
		name="description"
		content="Projects and work."
	/>
	<link rel="canonical" href="{site.url}/projects" />
	<meta property="og:title" content="Work — {site.name}" />
	<meta property="og:description" content="Projects and work." />
	<meta property="og:url" content="{site.url}/projects" />
	<meta property="og:type" content="website" />
</svelte:head>

<Limb />

<main class="hz-page">
	<header class="intro">
		<h1 class="hz-display">Built, building, and left behind</h1>
	</header>

	<hr class="hz-rule" />

	{#each grouped as band}
		<section class="band" data-band={band.key}>
			<p class="hz-label hz-span">{band.label}</p>
			<ol class="list">
				{#each band.items as project}
					<li class="item" class:feature={project.feature} class:linked={project.link}>
						<p class="status hz-data">
							<span class="dot" style="background: {heat[project.status]}" aria-hidden="true"
							></span>
							{project.status}
						</p>
						<h2 class="hz-display">
							{#if project.link}
								<!-- The title carries the link; ::after stretches it over the whole card, so the
								     accessible name stays the project rather than every word on the card. -->
								<a href={project.link.url}>{project.title}</a>
							{:else}
								{project.title}
							{/if}
						</h2>
						<p class="note">{project.description}</p>
						<p class="tech hz-data">{project.tech.join('  ·  ')}</p>
						{#if project.link}
							<!-- Says where the card goes. Not a link itself — the card already is one. -->
							<p class="dest hz-data">{project.link.label}</p>
						{/if}
					</li>
				{/each}
			</ol>
		</section>
	{/each}
</main>

<style>
	.intro {
		padding: var(--s-6) 0 var(--s-7);
	}

	/* Centred, to match the masthead. Left-aligned it started the eye at the page
	   edge while the nav sat in the middle, and the two never resolved. */
	.intro h1 {
		font-size: var(--t-3);
		text-align: center;
	}

	.band {
		padding-top: var(--s-8);
	}

	.list {
		list-style: none;
		margin-top: var(--s-6);
		display: grid;
		gap: var(--s-7);
	}

	/* width:100% first — these are grid children, and auto margins alone make a grid
	   item shrink-wrap, which collapsed the card with the shortest description. */
	.item {
		position: relative;
		width: 100%;
		max-width: var(--measure);
		margin-inline: auto;
	}

	.status {
		display: flex;
		align-items: center;
		gap: var(--s-2);
		color: var(--ink-3);
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex: none;
	}

	.item h2 {
		font-size: var(--t-1);
		font-weight: 700;
		margin: var(--s-2) 0;
	}

	.feature h2 {
		font-size: var(--t-2);
	}

	.note {
		color: var(--ink-2);
	}

	.tech {
		margin-top: var(--s-3);
		color: var(--ink-3);
	}

	.dest {
		margin-top: var(--s-3);
		color: var(--ink-3);
		transition: color var(--dur-1) var(--ease);
	}

	.linked h2 a {
		text-decoration: none;
	}

	/* The whole card is the target. The gap between cards is --s-7, so the overspill
	   here cannot reach a neighbour. */
	.linked h2 a::after {
		content: '';
		position: absolute;
		inset: calc(var(--s-3) * -1);
	}

	/* The past redshifts in type, not just in the status dot. */
	[data-band='past'] .item h2 {
		color: var(--ink-2);
	}

	[data-band='past'] .note,
	[data-band='past'] .dest {
		color: var(--ink-3);
	}

	/* Hovering brings the object closer, so it heats toward the ring — the same rule
	   the bands use, for the same reason. After the past band, so approach beats redshift.
	   Gated on a real pointer: on touch, :hover sticks after a tap. */
	@media (hover: hover) {
		.linked:hover h2,
		[data-band='past'] .linked:hover h2 {
			color: var(--k5);
		}

		.linked:hover .dest {
			color: var(--ink-2);
		}
	}
</style>
