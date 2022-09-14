<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { page } from '$app/stores';
</script>

<Header />
<main>
	<PageTransition url={$page.url}>
		<slot />
	</PageTransition>
</main>
<Navigation />
