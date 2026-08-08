<script lang="ts">
	import Limb from '$lib/components/horizon/Limb.svelte';
	import { plates } from '$lib/content/art';
	import { site } from '$lib/content/site';

</script>

<svelte:head>
	<title>Art — {site.name}</title>
	<meta name="description" content="Pictures." />
	<link rel="canonical" href="{site.url}/art" />
	<meta property="og:title" content="Art — {site.name}" />
	<meta property="og:description" content="Pictures." />
	<meta property="og:url" content="{site.url}/art" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{site.url}/art/plate-1.webp" />
</svelte:head>

<Limb />

<main class="art">
	<h1 class="hz-sr-only">Art</h1>

	<div class="mosaic">
		{#each plates as plate, i}
			<figure class="plate" class:capped={plate.cap} style={plate.cap ? `--cap: ${plate.cap}rem` : null}>
				<img
					src="/art/{plate.src}.webp"
					srcset="/art/{plate.src}-800.webp 800w, /art/{plate.src}.webp {plate.w}w"
					sizes="(min-width: 68rem) 23rem, 45vw"
					width={plate.w}
					height={plate.h}
					alt={plate.alt}
					loading={i < 2 ? 'eager' : 'lazy'}
					decoding="async"
				/>
			</figure>
		{/each}
	</div>
</main>

<style>
	.art {
		max-width: 76rem;
		margin: 0 auto;
		padding: 0 var(--s-4);
	}

	.mosaic {
		padding-top: var(--s-6);
		column-count: 2;
		column-gap: var(--s-4);
	}

	@media (min-width: 68rem) {
		.art {
			padding: 0 var(--s-6);
		}

		.mosaic {
			column-count: 3;
			column-gap: var(--s-5);
		}
	}

	/* A piece must never be split down a column boundary. */
	.plate {
		break-inside: avoid;
		margin: 0 0 var(--s-4);
	}

	@media (min-width: 68rem) {
		.plate {
			margin-bottom: var(--s-5);
		}
	}

	.plate img {
		width: 100%;
		height: auto;
		background: var(--k1);
	}

	/* max-width first, so a narrow column still wins over the cap. The capped piece
	   carries its own black ground, which sits a shade under the page's — it reads as a
	   plate with room around it, not as a floating shape. That is fine; it keeps the
	   mosaic's rectangle grammar. */
	.capped img {
		width: auto;
		max-width: 100%;
		max-height: var(--cap);
		margin-inline: auto;
		background: none;
	}
</style>
