<script lang="ts">
	import Limb from '$lib/components/horizon/Limb.svelte';
	import { getAllPosts } from '$lib/horizon/posts.js';
	import { site } from '$lib/content/site';

	const posts = getAllPosts();
</script>

<svelte:head>
	<title>Writing — {site.name}</title>
	<meta
		name="description"
		content="Essays and other writing."
	/>
	<link rel="canonical" href="{site.url}/blog" />
	<meta property="og:title" content="Writing — {site.name}" />
	<meta
		property="og:description"
		content="Essays and other writing."
	/>
	<meta property="og:url" content="{site.url}/blog" />
	<meta property="og:type" content="website" />
</svelte:head>

<Limb />

<main class="hz-page">
	<header class="intro">
		<h1 class="hz-display">Writing</h1>
	</header>

	<hr class="hz-rule" />

	<ol class="list">
		{#each posts as post}
			<li>
				<a href="/blog/{post.slug}">
					<span class="stamp hz-data">{post.date}</span>
					<span class="title hz-display">{post.title}</span>
					<!-- No tags: nothing indexes or filters them, so in a list they are noise
					     competing with the description. A poem carries no description either —
					     the date and the title are the whole entry, and that is the point. -->
					{#if post.description}
						<span class="note hz-quiet">{post.description}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ol>
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

	.list {
		list-style: none;
		padding-top: var(--s-7);
		display: grid;
		gap: var(--s-7);
	}

	.list a {
		display: grid;
		gap: var(--s-2);
		max-width: var(--measure);
		margin-inline: auto;
		text-decoration: none;
	}

	.stamp {
		color: var(--k4);
		letter-spacing: 0.1em;
	}

	.title {
		font-size: var(--t-2);
		font-weight: 700;
		line-height: 1.15;
	}

	.list a:hover .title {
		color: var(--k5);
	}
</style>
