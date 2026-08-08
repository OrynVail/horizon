<script lang="ts">
	import { onMount } from 'svelte';

	/* Cursor position stands in for observer position: where you are is what sets the beaming
	   asymmetry. Kept far below the threshold where anyone could correlate it with their mouse. */
	let drift = $state(0);
	let gain = $state(1);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let raf = 0;
		const onMove = (e: MouseEvent) => {
			if (raf) return;
			raf = requestAnimationFrame(() => {
				raf = 0;
				const nx = e.clientX / window.innerWidth - 0.5;
				const ny = e.clientY / window.innerHeight - 0.5;
				drift = nx * 3 + ny * 1.5;
				gain = 1.022 - Math.hypot(nx, ny) * 0.048;
			});
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		return () => {
			window.removeEventListener('mousemove', onMove);
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<!-- The whole object. Only the gateway gets this; every other page sees a fragment of its limb. -->
<svg
	class="shadow"
	viewBox="0 0 400 400"
	role="img"
	aria-label="An event horizon"
	style="--drift: {drift.toFixed(2)}deg; --gain: {gain.toFixed(3)}"
>
	<defs>
		<!-- Well centre sits off the geometric centre: a spinning hole's shadow is displaced. -->
		<radialGradient id="hz-well" cx="0.53" cy="0.47" r="0.53">
			<stop offset="0%" stop-color="#000000" />
			<stop offset="68%" stop-color="#000000" />
			<stop offset="100%" stop-color="#050507" />
		</radialGradient>

		<linearGradient id="hz-disk" x1="0.1" y1="1" x2="0.9" y2="0">
			<stop offset="0%" stop-color="var(--k4)" />
			<stop offset="14%" stop-color="var(--k5)" />
			<stop offset="38%" stop-color="var(--k4)" />
			<stop offset="60%" stop-color="var(--k3)" />
			<stop offset="80%" stop-color="var(--k2)" />
			<stop offset="100%" stop-color="#150f0c" />
		</linearGradient>

		<!-- Turbulent flow, one exposure. Static on purpose: Sgr A* varies over minutes, not frames.
		     Displacement rather than a luminance mask — it varies apparent thickness, which is what
		     stops the circle reading as vector art. -->
		<filter id="hz-flow" x="-6%" y="-6%" width="112%" height="112%">
			<feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" seed="11" result="t" />
			<feDisplacementMap
				in="SourceGraphic"
				in2="t"
				scale="0.8"
				xChannelSelector="R"
				yChannelSelector="G"
			/>
		</filter>
	</defs>

	<circle cx="200" cy="200" r="149" fill="url(#hz-well)" />

	<g class="lit">
		<g class="ring" filter="url(#hz-flow)">
			<circle cx="200" cy="200" r="149" fill="none" stroke="url(#hz-disk)" stroke-width="2.25" />
			<!-- n=1: light that orbited once more before escaping. Radius is stylised — at the true
			     flux ratio of e^-2pi it would be invisible. -->
			<circle
				cx="200"
				cy="200"
				r="144.2"
				fill="none"
				stroke="url(#hz-disk)"
				stroke-width="0.7"
				opacity="0.22"
			/>
		</g>
	</g>
</svg>

<style>
	/* The svh term caps it by leftover height, so landscape phones don't clip the ring. */
	.shadow {
		width: min(74vmin, 39rem, calc(100svh - 11rem));
		height: min(74vmin, 39rem, calc(100svh - 11rem));
		overflow: visible;
	}

	.ring {
		transform: rotate(var(--drift, 0deg));
		transform-box: fill-box;
		transform-origin: 50% 50%;
		transition: transform 1400ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.lit {
		filter: brightness(var(--gain, 1));
		transition: filter 1400ms linear;
	}

	@media (prefers-reduced-motion: reduce) {
		.ring,
		.lit {
			transition: none;
		}
	}

	/* vmin tracks the short edge, which leaves the ring undersized in portrait. */
	@media (max-width: 40rem) {
		.shadow {
			width: min(88vw, 26rem, calc(100svh - 12rem));
			height: min(88vw, 26rem, calc(100svh - 12rem));
		}
	}
</style>
