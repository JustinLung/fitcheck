<script lang="ts">
	export let mealName: string;
	export let mealImage: string;
	export let mealPrepTime: number;
</script>

<section>
	<article>
		<div>
			<img src={mealImage} alt={`${mealName} image`} />
		</div>
		<div>
			<h3>{mealName}</h3>
			<span>{mealPrepTime} min</span>
		</div>
	</article>
</section>

<style>
	article {
		border-radius: 0.3rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		width: 20rem;
		scroll-snap-align: center;
	}

	div:first-child {
		height: 30%;
		width: 100%;
	}

	div:last-child {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	img {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		width: 100%;
	}

	h3 {
		padding: 0;
		margin: 0;
	}
</style>
