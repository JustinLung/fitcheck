<script lang="ts">
	import WorkoutCard from './WorkoutCard.svelte';
</script>

<section>
	<h2>Featured Workouts</h2>
	<div>
		<WorkoutCard
			workoutImage="/assets/images/deadlift-image.jpg"
			workoutName="Pull Workout"
			workoutTime={60}
		/>
		<WorkoutCard
			workoutImage="/assets/images/deadlift-image.jpg"
			workoutName="Pull Workout"
			workoutTime={60}
		/>
		<WorkoutCard
			workoutImage="/assets/images/deadlift-image.jpg"
			workoutName="Pull Workout"
			workoutTime={60}
		/>
	</div>
</section>

<style>
	section {
		padding: 0 1.2rem;
        margin-bottom: 2rem;
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
