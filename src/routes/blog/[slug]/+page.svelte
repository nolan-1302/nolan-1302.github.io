<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<svelte:head>
    <title>Kicks-{data.blogPost.title}</title>
</svelte:head>

<base target="_blank" />

<div class="flex flex-col font-poppins w-full mx-auto px-5 py-6 my-4 sm:p-8 items-center justify-center">
    <div class="text-white text-shadow flex flex-col items-center justify-center">
        <p class="text-white mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center font-poppins">
            {data.blogPost.title}
        </p>
        
        <p class="date md:text-4xl sm:text-3xl text-2xl text-center font-poppins text-white">
            {new Date(data.blogPost.date).toLocaleString('en-us', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </p>
    </div>
</div>

<article class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%]">
        <div class="mb-5 text-white text-shadow flex flex-col self-center">
        <p class="bg-white rounded-lg h-1 flex transition-all mb-5 text-white mx-4" />
        <article class="bg-secondary rounded-md p-5 font-poppins backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein mx-4">
            <article class="prose text-white prose-headings:font-bold prose-headings:text-white prose-headings:font-poppins prose-a:underline prose-a:text-white hover:prose-a:text-tertiary hover:prose-a:transition-all">
                {#if data.blogPost.edited}
                <p class="text-sm text-center w-full flex">Last edited: {new Date(data.blogPost.edited).toLocaleString('en-us', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}</p>
                {/if}
                <svelte:component this={data.content} />
            </article>
        </article>
    </div>

    
</article>

<DiscordEmbed title={data.blogPost.title} description={data.blogPost.description} />