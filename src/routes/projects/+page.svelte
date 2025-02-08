<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
    <title>Kicks-Projects</title>
</svelte:head>

<div class="w-full flex items-center justify-center animate-fadein">
    <div class="max-w-3xl w-full my-5 mx-auto flex flex-col gap-4 font-poppins px-5 text-white sm:px-0">
        <Header title="Projects" HyperLink={false} />
    </div>
</div>

<div class="w-full flex items-center flex-col animate-fadein mb-5  px-5">
    <div class="grid w-full max-w-3xl grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5">
        {#each data.posts as project}
            <Project project={project} />
        {/each}
    </div>
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />
