<script lang="ts">
	import { getAllPosts, getPostBySlug } from '$lib/horizon/posts.js';
	import { site } from '$lib/content/site';

	let { data } = $props();

	/* posts.js globs eagerly, so the component resolves during SSR — no onMount import, no
	   empty HTML for crawlers. */
	const entry = getPostBySlug(data.post.slug) as { component: any } | undefined;
	const Post = entry?.component;

	const all = getAllPosts();
	const i = all.findIndex((p: { slug: string }) => p.slug === data.post.slug);
	const older = all[i + 1];
	const newer = all[i - 1];

	const url = `${site.url}/blog/${data.post.slug}`;
	const isVerse = data.post.type === 'poem' || data.post.layout === 'poetry';
</script>

<svelte:head>
	<title>{data.post.title} — {site.name}</title>
	<meta name="description" content={data.post.description} />
	<link rel="canonical" href={url} />
	<meta property="og:title" content="{data.post.title} — {site.name}" />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="hz-page">
	<article>
		<header class="head">
			<p class="hz-label">{data.post.date}</p>
			<h1 class="hz-display">{data.post.title}</h1>
			{#if data.post.description}
				<p class="hz-lede hz-measure">{data.post.description}</p>
			{/if}
			{#if data.post.tags?.length}
				<p class="tags hz-data hz-faint">{data.post.tags.join('  ·  ')}</p>
			{/if}
		</header>

		<hr class="hz-rule" />

		<div class="body" class:hz-article={!isVerse} class:hz-verse={isVerse}>
			{#if Post}
				<Post />
			{/if}
		</div>
	</article>

	{#if older || newer}
		<nav class="ends hz-data">
			{#if older}
				<a class="older" href="/blog/{older.slug}">
					<span class="hz-faint">Older</span>
					<span class="hz-quiet">{older.title}</span>
				</a>
			{/if}
			{#if newer}
				<a class="newer" href="/blog/{newer.slug}">
					<span class="hz-faint">Newer</span>
					<span class="hz-quiet">{newer.title}</span>
				</a>
			{/if}
		</nav>
	{/if}
</main>

<style>
	/* On the measure, not on --page. An essay's title belongs flush with the column it
	   introduces; left-aligned across the full page it hung 48px outside its own prose.
	   Index headings are centred instead — those are page titles over a list, not the
	   head of a text column. */
	.head {
		max-width: var(--measure);
		margin-inline: auto;
		padding: var(--s-6) 0 var(--s-6);
	}

	.head h1 {
		margin: var(--s-3) 0 var(--s-4);
		font-size: var(--t-3);
		max-width: 20ch;
	}

	.tags {
		margin-top: var(--s-4);
	}

	.body {
		padding-top: var(--s-7);
	}

	.ends {
		margin-top: var(--s-8);
		padding-top: var(--s-5);
		border-top: 1px solid var(--k2);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--s-4);
	}

	.ends a {
		display: grid;
		gap: var(--s-1);
		max-width: 18rem;
		text-decoration: none;
	}

	.newer {
		text-align: right;
		margin-left: auto;
	}
</style>
