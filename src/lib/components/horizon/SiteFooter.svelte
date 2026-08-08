<script lang="ts">
	import { site } from '$lib/content/site';
</script>

<footer class="foot hz-data hz-faint">
	<hr class="hz-rule" />
	<p>{site.footer}</p>
</footer>

<style>
	.foot {
		max-width: var(--page);
		margin: 0 auto;
		padding: var(--s-8) var(--s-4) var(--s-7);
		text-align: center;
	}

	.foot p {
		padding-top: var(--s-5);
	}
</style>
