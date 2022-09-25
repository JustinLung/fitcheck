<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header />
<main>
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
</main>
<Navigation />
