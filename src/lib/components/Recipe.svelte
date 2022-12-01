<script lang="ts">
	export let recipeImage: string;
	export let recipeTitle: string;
	export let recipeDescription: string;
	export let recipeTime: number;
</script>

<img src={recipeImage} alt={recipeTitle} />
<section>
	<h2>{recipeTitle}</h2>
	<span>{recipeTime} min</span>
	<p>{recipeDescription}</p>
	<ul>
		<slot />
	</ul>
</section>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		width: 100%;
	}
	h2 {
		padding: 0;
		margin: 0;
	}
	section {
		padding: 1.2rem;
	}
</style>
