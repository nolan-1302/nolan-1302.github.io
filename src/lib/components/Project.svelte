<script lang="ts">
	export let project;

	let slug = project.redirect ? project.redirect : `projects/${project.slug}`;

	let isHovered: boolean;
</script>

<a
	class="flex flex-shrink-0 flex-row text-white min-h-24 font-poppins items-center relative gap-6"
	href={slug}
    on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	{#if project.image}
		<img src={project.image} class="h-32 w-32 rounded-md flex-shrink-0 flex" alt={project.title} />
	{/if}

	<div class="flex items-start justify-center flex-col w-full h-full">
		<p class="text-xl font-bold">{project.title}</p>
		<p>{project.description}</p>
		
		{#if project.lang}
			<p class="text-sm">{project.lang}</p>
		{/if}
	</div>

    <p class="absolute -bottom-2 w-full bg-white rounded-lg h-1 flex {isHovered ? "opacity-100" : "opacity-0"} transition-all" />
</a>
