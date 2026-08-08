<!-- The near limb of something large, just below the page. One luminous element per page, no more. -->
<div class="limb" aria-hidden="true">
	<svg viewBox="0 0 1200 160" preserveAspectRatio="none">
		<defs>
			<linearGradient id="hz-limb" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="var(--k0)" />
				<stop offset="14%" stop-color="var(--k2)" />
				<stop offset="36%" stop-color="var(--k5)" />
				<stop offset="58%" stop-color="var(--k4)" />
				<stop offset="82%" stop-color="var(--k2)" />
				<stop offset="100%" stop-color="var(--k0)" />
			</linearGradient>
		</defs>
		<path
			d="M0 152 Q 600 8 1200 152"
			fill="none"
			stroke="url(#hz-limb)"
			stroke-width="1.5"
			vector-effect="non-scaling-stroke"
		/>
	</svg>
</div>

<style>
	.limb {
		width: 100%;
		overflow: hidden;
	}

	.limb svg {
		width: 100%;
		height: 6rem;
		display: block;
	}

	/* Swept with clip-path, not stroke-dash: non-scaling-stroke measures dashes in rendered px,
	   so any fixed dasharray stops short once the viewport is wider than it. */
	.limb svg {
		animation: draw 1600ms var(--ease) forwards;
	}

	@keyframes draw {
		from {
			clip-path: inset(0 100% 0 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.limb svg {
			animation: none;
			clip-path: none;
		}
	}

	@media (max-width: 640px) {
		.limb svg {
			height: 4rem;
		}
	}
</style>
