<script lang="ts">
	import ExerciseCard from '$lib/components/Slider/ExerciseCard.svelte';
	export let workoutTitle: string;
</script>

<section>
	<h2>{workoutTitle}</h2>
	<ExerciseCard exercise="Deadlift" setCount={3} repCount={8} restCount={340} />
	<ExerciseCard exercise="Lat Pulldown" setCount={3} repCount={8} restCount={340} />
	<ExerciseCard exercise="Bicep Curls" setCount={3} repCount={8} restCount={340} />
	<ExerciseCard exercise="Rear Delt Flyes" setCount={3} repCount={8} restCount={340} />
</section>

<style>
	h2 {
		padding: 0;
		margin: 0;
	}
	section {
		padding: 1.2rem;
	}
</style>
