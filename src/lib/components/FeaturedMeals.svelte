<script lang="ts">
	import MealCard from './MealCard.svelte';
</script>

<section>
	<h2>Meal plans for you</h2>
	<div>
		<MealCard
			mealName="Ceasar Salad"
			mealPrepTime={20}
			mealImage="/assets/images/ceasar-salad.jpeg"
		/>
		<MealCard
			mealName="Ceasar Salad"
			mealPrepTime={20}
			mealImage="/assets/images/ceasar-salad.jpeg"
		/>
		<MealCard
			mealName="Ceasar Salad"
			mealPrepTime={20}
			mealImage="/assets/images/ceasar-salad.jpeg"
		/>
	</div>
</section>

<style>
	section {
		padding: 0 1.2rem;
	}

	h2 {
		font-size: 1.2rem;
	}

	div {
		height: 100%;
		display: flex;
		grid-auto-flow: column;
		gap: 1rem;
		overflow-y: auto;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
	}
</style>
