<script lang="ts">
	export let exercise: string;
	export let setCount: number;
	export let repCount: number;
	export let restCount: number;
</script>

<article>
	<h3>{exercise}</h3>
	<div>
		<span>{setCount} SETS of {repCount} REPS</span>
		<span>Rest. {restCount}s</span>
	</div>
</article>

<style>
	h3 {
		padding: 0;
		margin: 0;
	}
</style>
