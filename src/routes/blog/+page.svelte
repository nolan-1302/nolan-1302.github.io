<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;
</script>

<svelte:head>
    <title>Kicks-Blogs</title>
</svelte:head>

<div class="w-full flex items-center justify-center animate-fadein">
    <div class="max-w-3xl w-full my-6 mx-auto flex flex-col gap-4 font-poppins px-5 text-white sm:px-0">
        <Header title="Blogs" HyperLink={false} />
    </div>
</div>

<div class="w-full flex items-center flex-col px-5 animate-fadein">
    {#each data?.posts ?? [] as blogPost}
        <Blog blogPost={blogPost} />
    {/each}
</div>

<DiscordEmbed title="kicks" description="My blogs" />