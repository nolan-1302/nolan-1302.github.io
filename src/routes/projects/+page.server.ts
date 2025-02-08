import type { PageServerLoad } from './$types';
import path from 'path';

export const load: PageServerLoad = async ({ fetch }) => {
    const allPostFiles = import.meta.glob("/src/content/projects/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);

    let unsortedPosts: App.Project[] = await Promise.all(
        iterablePostFiles.map(async ([filePath, resolver]) => {
            const { metadata }: any = await resolver();
            const { name } = path.parse(filePath);
            
            return {
                slug: name,
                ...metadata
            };
        })
    );
    
    unsortedPosts = unsortedPosts.filter( (post: App.Project) => post.published ?? true );

    const posts = unsortedPosts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });

    return { posts };
};