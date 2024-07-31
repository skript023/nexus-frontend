import { ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const progresses = [] as ProgressFinisher[];

axios.interceptors.request.use(config => {
    progresses.push(useProgress().start());
    return config;
});

axios.interceptors.response.use(resp => {
    progresses.pop()?.finish();
    return resp;
}, (error) => {
    progresses.pop()?.finish();
    return Promise.reject(error);
});

export const url = {
    backend: import.meta.env.VITE_ENVIRONMENT === 'development' ? import.meta.env.VITE_BACKEND_URL_DEV : import.meta.env.VITE_BACKEND_URL_PROD 
}

const request = axios.create({
    baseURL: url.backend,
    withCredentials: true
});

class HttpRequest
{
    async get(route: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        const result = await request.get(route, config);

        if (result.status == 401)
        {
            localStorage.clear();
            window.location.replace('/login');
        }

        return result;
    }

    async post(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        const result = await request.post(route, data, config);

        if (result.status == 401)
        {
            localStorage.clear();
            window.location.replace('/login');
        }

        return result;
    }

    async patch(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        const result = await request.patch(route, data, config);

        if (result.status == 401)
        {
            localStorage.clear();
            window.location.replace('/login');
        }

        return result;
    }

    async put(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        const result = await request.put(route, data, config);

        if (result.status == 401)
        {
            localStorage.clear();
            window.location.replace('/login');
        }

        return result;
    }

    async delete(route: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        const result = await request.delete(route, config);

        if (result.status == 401)
        {
            localStorage.clear();
            window.location.replace('/login');
        }

        return result;
    }
}

export const http = new HttpRequest();