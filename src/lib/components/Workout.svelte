<script lang="ts">
	export let workoutImage: string;
	export let workoutTitle: string;
	export let workoutDescription: string;
	export let workoutTime: number;
</script>

<img src={workoutImage} alt={workoutTitle} />
<section>
	<h2>{workoutTitle}</h2>
	<span>{workoutTime} min</span>
	<p>{workoutDescription}</p>
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
