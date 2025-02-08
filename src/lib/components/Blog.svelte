<script lang="ts">
    export let blogPost;
</script>

<a href={`${blogPost.IsNews ? "sboxnews/" : "blog/"}${blogPost.slug}`} class="block p-4 bg-secondary rounded-md mb-4 hover:scale-[1.01] active:scale-[0.99] transition-all w-full max-w-3xl font-poppins">
    <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>

    {#if blogPost.description}
        <p class="text-white font-semibold">{blogPost.description}</p>
    {/if}

    <p class="text-gray-400 text-white">
        {new Date(blogPost.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })}
    </p>
</a>