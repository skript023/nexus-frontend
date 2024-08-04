import { http } from "@/utils/http";
import ServerResponse from "@/utils/response";
import type Post from "./dto/post.dto";

export default class post 
{
    static async create(post: Post): Promise<ServerResponse<Post>>
    {
        try 
        {
            const response = await http.post(`/api/Post`, post, { headers: { 'Content-Type': 'application/json' } });

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }

    static async get_all(page?: number, limit?: number): Promise<ServerResponse<Post[]>>
    {
        try 
        {
            const response = await http.get(`/api/Post?page=${page}&limit${limit}`);

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }

    static async get(id?: string): Promise<ServerResponse<Post>>
    {
        try
        {
            const response = await http.get(`/api/Post/${id}`);

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }

    static async read_more(slug: string): Promise<ServerResponse<Post>>
    {
        try 
        {
            const response = await http.get(`/api/Post/read-more/${slug}`);

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }

    static async update(id: string, post: Post): Promise<ServerResponse<Post>>
    {
        try
        {
            const response = await http.patch(`/api/Post/${id}`, post, { headers: { 'Content-Type': 'application/json' } });

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }

    static async delete(id: string): Promise<ServerResponse<Post>>
    {
        try 
        {
            const response = await http.delete(`/api/Post/${id}`);

            return response.data;
        } 
        catch (error: any) 
        {
            return error.response.data;
        }
    }
}