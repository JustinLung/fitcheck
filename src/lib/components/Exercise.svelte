<script lang="ts">
	export let exerciseTitle: string;
	export let exerciseSets: number;
	export let exerciseReps: number;
</script>

<li>
	{exerciseTitle}<span>{exerciseSets} Sets</span>
	<span>{exerciseReps} Reps</span>
</li>

<style>
	li {
		display: flex;
	}

	span:first-child {
		margin-left: auto;
		margin-right: 0.5rem;
	}
</style>
