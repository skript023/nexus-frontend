export default interface Post
{
    id: string;
    userId: string;
    categoryId: string;
    title: string;
    article: string;
    slug: string;
    image: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
    category: any;
    comments: any[];
    user: any;
}