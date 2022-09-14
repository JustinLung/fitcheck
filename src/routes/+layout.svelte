<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';
		import { supabase } from '$lib/vendors/supabase';
		import { user } from '$lib/states/user';
</script>

<Header />
<main>
	<slot />
</main>
<Navigation />
