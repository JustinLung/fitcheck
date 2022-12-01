<script lang="ts">
	import Workout from '$lib/components/Workout.svelte';
	import Exercise from '$lib/components/Exercise.svelte';
</script>

<Workout
	workoutImage="/assets/images/deadlift-image.jpg"
	workoutTitle="Pull Workout"
	workoutTime={60}
	workoutDescription="This pull workout consists of back & bicep exercises."
>
	<Exercise exerciseTitle="Bicep Curls" exerciseReps={8} exerciseSets={3} />
	<Exercise exerciseTitle="Barbell Rows" exerciseReps={8} exerciseSets={3} />
	<Exercise exerciseTitle="Deadlift" exerciseReps={8} exerciseSets={3} />
	<Exercise exerciseTitle="Wide Grip Lat Pulldown" exerciseReps={8} exerciseSets={3} />
</Workout>
