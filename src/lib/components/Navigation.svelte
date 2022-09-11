<nav>
	<ul>
		<li>
			<a href="/"><img src="/assets/icons/home-icon.svg" alt="Home" /></a>
		</li>
		<li>
			<a href="/workouts"> <img src="/assets/icons/barbell-icon.svg" alt="Workouts" /></a>
		</li>
		<li>
			<a href="/meals">
				<img src="/assets/icons/apple-icon.svg" alt="Meals" />
			</a>
		</li>
		<li>
			<a href="/profile"> <img src="/assets/icons/user-icon.svg" alt="Profile" /></a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0.7em 0;
		padding-bottom: 2em;
		border-radius: 0.5em;
		background-color: var(--color-white);
	}
	ul {
		display: flex;
		justify-content: space-around;
		list-style-type: none;
		margin: 0 auto;
		padding: 0;
	}

	li > a {
		position: relative;
	}

	li > a::after {
		color: var(--color-black);
		position: absolute;
		font-size: 0.8em;
		bottom: -1em;
		left: 50%;
		transform: translate(-50%);
	}

	img {
		width: 2em;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-bottom: 0.5em;
	}

	li:first-child > a:after {
		content: 'Home';
	}
	li:nth-child(2) > a:after {
		content: 'Workouts';
	}
	li:nth-child(3) > a:after {
		content: 'Meals';
	}
	li:nth-child(4) > a:after {
		content: 'Profile';
	}
</style>
