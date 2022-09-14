<script>
	import { supabase } from '$lib/vendors/supabase';
	import { user } from '$lib/states/user';
	import { goto } from '$app/navigation';

	function logout() {
		supabase.auth.signOut();
		goto('/login');
	}

	function goToLogin() {
		goto('/login');
	}
</script>

<header>
	<h1>FITCHECK</h1>
	{#if $user}
		<button on:click={logout}>
			<img src="/assets/icons/logout-icon.svg" alt="Logout Icon" />
		</button>
	{:else}
		<button on:click={goToLogin}>Login</button>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.2rem;
	}

	button {
		all: unset;
	}

	img {
		width: 1.8rem;
	}
</style>
