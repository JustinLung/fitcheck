<script lang="ts">
	import { goto } from '$app/navigation';
import { user } from '$lib/states/user';
import { supabase } from '$lib/vendors/supabase';
	let error: string;
	let email: string;
	let password: string;

	supabase.auth.onAuthStateChange((event, session) => {
		if(!session?.user) return	
		user.set(session.user)
	});

	async function handleLogin() {
		error = '';
		const response = await fetch('/api/signin', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		});

		if (response.ok) {
			// console.log(await response.json())
			
			// goto('/');
		} else {
			error = 'Oops... something went wrong.';
		}
	}
</script>

<section>
	<h2>Login</h2>
	<form method="POST" on:submit|preventDefault={handleLogin}>
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" placeholder="example@mail.com" required bind:value={email} />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" placeholder="*****" required bind:value={password} />
		</div>
		<input type="submit" />
		{#if error}
			<p>{error}</p>
		{/if}
	</form>
	<p>Don't have an account yet? <a href="/register">Register</a></p>
</section>

<style>
	h2 {
		padding: 0;
		margin-bottom: 0.8rem;
	}
	section {
		padding: 1.2rem;
	}

	a {
		color: var(--color-blue);
		text-decoration: none;
		font-weight: 500;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.8rem;
	}

	input {
		border-radius: 0.3em;
		border: none;
		padding: 0.5em 1em;
		font-size: 1rem;
		border: solid 1.5px var(--color-gray);
	}

	input[type='email'],
	input[type='password'] {
		height: 1.8em;
	}

	input[type='submit'] {
		background-color: var(--color-blue);
		color: var(--color-white);
		padding: 0.7em 5em;
		width: 100%;
	}
</style>
