<script lang="ts">
	export let username: string;
</script>

<section>
	<h2>Welcome, {username}! We'll use this space to get you back to work.</h2>
</section>

<style>
	section {
		background-color: var(--color-blue);
		color: var(--color-white);
        height: 12rem;
        font-size: 1.2rem;
        padding: 1.2rem;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
	}
</style>
