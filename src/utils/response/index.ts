export default interface ServerResponse<T>
{
    message: string;
    data: T | T[];
    success: boolean;
    last_page: number;
    total_data: number;
}