<script lang="ts">
	import Chevron from '../Icons/Chevron.svelte';

	export let title: string;
	export let link: string;
</script>

<section>
	<a href={link}
		><h2>{title}</h2>
		<Chevron class="chevron" /></a
	>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 0 1.2rem;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.2rem;
	}

	div {
		height: 100%;
		display: flex;
		grid-auto-flow: column;
		gap: 1rem;
		overflow-y: auto;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		padding-bottom: 1rem;
	}

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	:global(.chevron) {
		color: grey;
	}
</style>
