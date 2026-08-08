<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib/content/site';

	const nav = site.nav;

	const isGate = $derived($page.url.pathname === '/');
</script>

<header class="masthead" class:gate={isGate}>
	<nav>
		{#if !isGate}
			<a class="mark" href="/" aria-label="Home">
				<svg viewBox="0 0 32 32" aria-hidden="true">
					<defs>
						<linearGradient id="hz-mark" x1="0" y1="1" x2="1" y2="0">
							<stop offset="0%" stop-color="var(--k2)" />
							<stop offset="38%" stop-color="var(--k5)" />
							<stop offset="72%" stop-color="var(--k3)" />
							<stop offset="100%" stop-color="var(--k2)" />
						</linearGradient>
					</defs>
					<circle cx="16" cy="16" r="13" fill="none" stroke="url(#hz-mark)" stroke-width="3.5" />
				</svg>
			</a>
		{/if}
		{#each nav as item}
			<a href={item.href} class:active={$page.url.pathname.startsWith(item.href)}>
				{item.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	.masthead {
		display: flex;
		justify-content: center;
		padding: var(--s-5) var(--s-4);
	}

	nav {
		display: flex;
		align-items: center;
		gap: var(--s-5);
		font-family: var(--font-data);
		font-size: 1.125rem;
		letter-spacing: 0.04em;
	}

	/* The mark reduced to the one part of it that isn't a word. */
	.mark {
		display: flex;
		margin-right: var(--s-2);
		opacity: 0.8;
		transition: opacity var(--dur-1) var(--ease);
	}

	.mark svg {
		width: 1.15em;
		height: 1.15em;
	}

	.mark:hover {
		opacity: 1;
	}

	nav a {
		color: var(--ink-3);
		text-decoration: none;
		padding-bottom: 3px;
		border-bottom: 1px solid transparent;
	}

	nav a:hover {
		color: var(--ink);
	}

	/* work/writing/art are outputs; about is the author. The gap says so without spending colour. */
	nav a:last-child {
		margin-left: var(--s-2);
	}

	nav a.active {
		color: var(--ink);
		border-bottom-color: var(--k4);
	}

	.gate nav {
		gap: var(--s-6);
		font-size: 1.25rem;
	}

	.gate nav a {
		color: var(--ink-2);
	}

	@media (max-width: 30rem) {
		.masthead {
			padding-left: var(--s-3);
			padding-right: var(--s-3);
		}

		nav {
			gap: var(--s-4);
			font-size: 1rem;
		}

		.gate nav {
			gap: var(--s-4);
			font-size: 1.0625rem;
		}
	}
</style>
