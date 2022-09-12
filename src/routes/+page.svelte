<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import SliderCard from '$lib/components/Slider/SliderCard.svelte';
</script>

<Hero username="Justin" />
<Slider title="Featured Workouts" link="/workouts">
	{#each new Array(3) as e}
		<SliderCard
			image="/assets/images/deadlift-image.jpg"
			name="Pull Workout"
			time={60}
			link="/workouts/pull-workout"
		/>
	{/each}
</Slider>
<Slider title="Featured Meals" link="/meals">
	{#each new Array(3) as e}
		<SliderCard name="Ceasar Salad" time={20} image="/assets/images/ceasar-salad.jpeg" link="/" />
	{/each}
</Slider>
