import type { PageServerLoad } from './$types';
import { NewsAsBlog, type NewsPost } from '$lib/types/NewsPosts';
import path from 'path';

export const load: PageServerLoad = async ({ fetch }) => {
    const allPostFiles = import.meta.glob("/src/content/blogs/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);

    let unsortedPosts: App.BlogPost[] = await Promise.all(
        iterablePostFiles.map(async ([filePath, resolver]) => {
            const { metadata }: any = await resolver();
            const { name } = path.parse(filePath);

            return {
                slug: name,
                ...metadata
            };
        })
    );

    unsortedPosts = unsortedPosts.filter((post: App.BlogPost) => post.published ?? true);

    const posts = unsortedPosts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });

    const allProjectFiles = import.meta.glob("/src/content/projects/*.md");
        const iterableProjectFiles = Object.entries(allProjectFiles);
    
        let unsortedProjects: App.Project[] = await Promise.all(
            iterableProjectFiles.map(async ([filePath, resolver]) => {
                const { metadata }: any = await resolver();
                const { name } = path.parse(filePath);
                
                return {
                    slug: name,
                    ...metadata
                };
            })
        );
        
        unsortedProjects = unsortedProjects.filter( (post: App.Project) => post.published ?? true );
    
        const projects = unsortedProjects.sort((a, b) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });

        console.log( projects );

    return { posts, projects };
};