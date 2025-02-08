import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const post = await import(`../../../content/projects/${params.slug}.md`);
    const project: App.Project = post.metadata;

    return {
        content: post.default,
        project: {
            ...project
        }
    };
};