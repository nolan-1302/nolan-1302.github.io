<script>
	import NameCard from '$lib/components/NameCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Nolan</title>
</svelte:head>

<NameCard />

<div class="w-full flex items-center justify-center p-5 pt-0">
	<div class="flex flex-col items-center justify-center max-w-3xl rounded-md animate-fadein w-full">
		<h2 class="text-white font-poppins text-2xl flex items-start w-full font-bolder">
			Latest Blog
		</h2>
		<p class="bg-white rounded-lg h-1 flex transition-all my-5 text-white mx-4 w-full" />
		<a
			href={`${data.posts[0]?.IsNews ? 'sboxnews/' : 'blog/'}${data.posts[0]?.slug}`}
			class="block p-5 bg-secondary rounded-md mb-4 hover:scale-[1.01] active:scale-[0.99] transition-all w-full"
		>
			<h2 class="text-2xl font-bold text-white">{data.posts[0]?.title}</h2>

			{#if data.posts[0]?.description}
				<p class="text-white font-semibold">{data.posts[0]?.description}</p>
			{/if}
			<p class="text-gray-400 text-white">
				{new Date(data.posts[0]?.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})}
			</p>
		</a>
	</div>
</div>
<DiscordEmbed title="Nolan" description="My personal website" />
