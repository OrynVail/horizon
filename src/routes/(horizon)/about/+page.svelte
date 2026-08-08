<script lang="ts">
	import Limb from '$lib/components/horizon/Limb.svelte';
	import { about } from '$lib/content/about';
	import { site } from '$lib/content/site';

	const url = `${site.url}/about`;
</script>

<svelte:head>
	<title>About — {site.name}</title>
	<meta name="description" content={about.statement} />
	<link rel="canonical" href={url} />
	<meta property="og:title" content="About — {site.name}" />
	<meta property="og:description" content={about.statement} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="profile" />
</svelte:head>

<Limb />

<main class="hz-page">
	<header class="intro">
		<h1 class="hz-display">{about.statement}</h1>
	</header>

	<hr class="hz-rule" />

	{#if about.direction.paragraphs.length}
		<section class="block">
			<p class="hz-label">{about.direction.label}</p>
			<div class="hz-prose hz-measure">
				{#each about.direction.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</section>
	{/if}

	{#if about.trajectory.nodes.length}
		<section class="block">
			<p class="hz-label">{about.trajectory.label}</p>
			<ol class="worldline">
				{#each about.trajectory.nodes as node}
					<li class="node">
						<span class="marker" aria-hidden="true"></span>
						<p class="year hz-data">{node.year}</p>
						<h2 class="hz-display">{node.title}</h2>
					</li>
				{/each}
			</ol>
		</section>
	{/if}

	{#if about.building.items.length}
		<section class="block">
			<p class="hz-label">{about.building.label}</p>
			<dl class="works hz-measure">
				{#each about.building.items as item}
					<div class="work">
						<dt>{item.name}</dt>
						<dd class="hz-quiet">{item.note}</dd>
					</div>
				{/each}
			</dl>
			<p class="more hz-data">
				<a href="/projects">All work</a>
			</p>
		</section>
	{/if}

	<section class="block">
		<p class="hz-label">{about.contact.label}</p>
		<div class="hz-prose hz-measure">
			<p>{about.contact.blurb}</p>
		</div>
		<p class="mail hz-data">
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
		{#if site.social.github || site.social.x}
			<p class="glyphs">
				{#if site.social.github}
					<a href={site.social.github} rel="me" aria-label="GitHub">
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
					/>
				</svg>
					</a>
				{/if}
				{#if site.social.x}
					<a href={site.social.x} rel="me" aria-label="X">
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
					/>
				</svg>
					</a>
				{/if}
			</p>
		{/if}
	</section>
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

	.block {
		padding: var(--s-8) 0 0;
	}

	/* The labels carry the sections now that the headings are gone. */
	.block .hz-label + * {
		margin-top: var(--s-5);
	}

	.worldline {
		list-style: none;
		position: relative;
		margin-top: var(--s-6);
		padding-left: var(--s-5);
		display: grid;
		gap: var(--s-5);
	}

	.worldline::before {
		content: '';
		position: absolute;
		left: 3px;
		top: 0.4rem;
		bottom: 0.4rem;
		width: 1px;
		background: linear-gradient(
			180deg,
			var(--k2) 0%,
			var(--k4) 18%,
			var(--k4) 82%,
			var(--k2) 100%
		);
	}

	/* Below this the measure does not bind, and the gutter the axis hangs into
	   would come out of the page padding — so it keeps its own padding instead. */
	@media (min-width: 47rem) {
		.worldline {
			max-width: var(--measure);
			margin-inline: auto;
			padding-left: 0;
		}

		.worldline::before {
			left: calc(3px - var(--s-5));
		}
	}

	.node {
		position: relative;
		max-width: var(--measure);
	}

	.marker {
		position: absolute;
		left: calc(-1 * var(--s-5));
		top: 0.42rem;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--k4);
	}

	.year {
		color: var(--k4);
		letter-spacing: 0.1em;
		margin-bottom: var(--s-1);
	}

	/* opsz is pinned at 144, so small display sizes need weight to stop the hairlines thinning out. */
	.node h2 {
		font-size: var(--t-1);
		font-weight: 700;
		line-height: 1.2;
	}

	.works {
		display: grid;
		gap: var(--s-5);
	}

	.work dt {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: var(--t-1);
		letter-spacing: -0.01em;
	}

	.work dd {
		margin-top: var(--s-1);
	}

	.more {
		margin-top: var(--s-5);
	}

	.more a {
		color: var(--ink-2);
	}

	/* Drawn, not typed — none of the four faces carries U+2192. */
	.more a::after {
		content: '';
		display: inline-block;
		width: 0.9em;
		height: 0.9em;
		margin-left: 0.45em;
		vertical-align: -0.1em;
		background: var(--k4);
		-webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E")
			center / contain no-repeat;
		mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E")
			center / contain no-repeat;
	}

	.mail {
		margin-top: var(--s-4);
	}

	.mail a {
		color: var(--ink-2);
	}

	.glyphs {
		margin-top: var(--s-4);
		display: flex;
		gap: var(--s-4);
	}

	.glyphs a {
		color: var(--ink-3);
		display: flex;
	}

	.glyphs a:hover {
		color: var(--ink);
	}

	.glyphs svg {
		width: 1.15rem;
		height: 1.15rem;
	}

	@media (max-width: 640px) {
		.block {
			padding-top: var(--s-7);
		}
	}
</style>
