<script lang="ts">
	// Intentionally bare: every route inherits this one. Portfolio chrome lives in (site).
	let { children } = $props();
</script>

{@render children()}
