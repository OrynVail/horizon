<script lang="ts">
	import '$lib/styles/horizon/tokens.css';
	import '$lib/styles/horizon/base.css';
	import '$lib/styles/horizon/prose.css';
	import Masthead from '$lib/components/horizon/Masthead.svelte';
	import SiteFooter from '$lib/components/horizon/SiteFooter.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	/* The gateway carries nothing but the ring and the nav. */
	const isGate = $derived($page.url.pathname === '/');
</script>

<svelte:head>
	<meta name="theme-color" content="#0a0a0d" />
	<link rel="preload" href="/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/fonts/newsreader.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link
		rel="preload"
		href="/fonts/spline_sans_mono.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<Masthead />
{@render children()}
{#if !isGate}
	<SiteFooter />
{/if}
