<script lang="ts">
	let email: string;
	let password: string;
	let error: string;
	let message: string;

	async function handleRegister() {
		error = '';
		try {
			const req = await fetch('/api/signup', {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});
			const res = await req.json();
			message = 'An email has been sent.';
		} catch (err) {
			error = 'Something went wrong';
		}
	}
</script>

<section>
	<h2>Register</h2>
	<form method="POST" on:submit|preventDefault={handleRegister}>
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" placeholder="example@mail.com" bind:value={email} />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" placeholder="*****" bind:value={password} />
		</div>
		<input type="submit" />
		{#if message}
			{message}
		{/if}
		{#if error}
			{error}
		{/if}
	</form>
	<p>Already have an account? <a href="/register">Login</a></p>
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
