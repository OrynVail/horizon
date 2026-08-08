<script lang="ts">
	import { site } from '$lib/content/site';
	import Shadow from '$lib/components/horizon/Shadow.svelte';
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href="{site.url}/" />
	<meta property="og:title" content={site.name} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content="{site.url}/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{site.url}/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="{site.url}/og.jpg" />
</svelte:head>

<h1 class="hz-sr-only">{site.name}</h1>

<div class="gate">
	<div class="grain" aria-hidden="true"></div>
	<Shadow />
</div>

<style>
	.gate {
		min-height: calc(100svh - 7.5rem);
		display: grid;
		place-items: center;
		padding: var(--s-4);
	}

	/* Sky noise. It stops at the horizon because the disc above it is opaque — and now that it
	   moves, the dead-still shadow reads as a hole rather than a fill. Oversized so the reseeding
	   offsets never expose an edge. */
	.grain {
		position: fixed;
		inset: -50%;
		z-index: 0;
		pointer-events: none;
		opacity: 0.075;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E");
		background-size: 240px 240px;
		animation: shot 900ms steps(1, end) infinite;
	}

	/* Detector noise, not source variability — the ring itself stays one exposure. ~9fps, because
	   film grain shimmers and television static crawls. */
	@keyframes shot {
		0% {
			transform: translate3d(0, 0, 0);
		}
		12.5% {
			transform: translate3d(-2%, 3%, 0);
		}
		25% {
			transform: translate3d(4%, -1%, 0);
		}
		37.5% {
			transform: translate3d(-3%, -3%, 0);
		}
		50% {
			transform: translate3d(2%, 2%, 0);
		}
		62.5% {
			transform: translate3d(-4%, 1%, 0);
		}
		75% {
			transform: translate3d(1%, -4%, 0);
		}
		87.5% {
			transform: translate3d(3%, 2%, 0);
		}
	}

	.gate :global(.shadow) {
		position: relative;
		z-index: 1;
	}
</style>
