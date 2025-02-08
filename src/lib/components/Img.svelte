<script lang="ts">
	import { page } from '$app/stores';

	export let src: string;
	export let caption: string = '';
	export let href: string = '';
	export let alt: string = '';
</script>

<div class="text-center">
	<img
		class="mx-auto flex justify-center rounded-[0.3em] w-["
		class:caption-img={caption}
		src={src}
		alt={alt ? alt : src}
	/>
	{#if caption}
		{#if href}
			<a {href} style="margin-top: 0px;">{caption}</a>
		{:else}
			<p style="margin-top: 0px;">{caption}</p>
		{/if}
	{/if}
</div>