export interface NewsPost {
    Id: string;
    Url: string;
    Created: string;
    Title: string;
    Summary: string;
    Media: string;
    Package: string;
    Sections: Sections[];
}

export const NewsAsBlog = function (post: NewsPost): App.BlogPost {
    return {
        slug: post.Title,
        title: post.Title,
        date: post.Created,
        description: post.Summary,
        published: true,
        IsNews: true,
    } as App.BlogPost;
}

export interface SectionAuthor {
    Name: string;
    Url: string;
}

export interface Sections {
    Id: string;
    Title: string;
    Contents: string;
    Author: SectionAuthor;
}