<script lang="ts">
	export let workoutName: string;
	export let workoutImage: string;
	export let workoutLink: string;
	export let workoutTime: number;
</script>

<a href={workoutLink}>
	<article>
		<div>
			<img src={workoutImage} alt={`${workoutName} image`} />
		</div>
		<div>
			<h3>{workoutName}</h3>
			<span>{workoutTime} min</span>
		</div>
	</article>
</a>

<style>
	article {
		border-radius: 0.3rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		scroll-snap-align: center;
		width: 90vw;
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
