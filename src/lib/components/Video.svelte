<script lang="ts">
	import { page } from '$app/stores';

	export let src: string = '';
	export let caption: string = '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-media-has-caption -->
<div class="text-center">
	<video class="mx-auto my-5 flex justify-center rounded-[0.3em]" controls>
		<source src={'../' + src} />
	</video>

	{#if caption}
		<p style="margin-top: 0px;">{caption}</p>
	{/if}
</div>
