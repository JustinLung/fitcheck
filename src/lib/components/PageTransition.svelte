<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div in:fly={{ y: 25, duration: 250, delay: 250 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}
