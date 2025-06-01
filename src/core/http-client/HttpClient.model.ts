import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { HttpClientInterface } from "@/core/http-client/HttpClient.interface";
import type { HttpRequestParamsInterface } from "@/core/http-client/HttpRequestParams.interface";
import config from "@/core/config";

export default class HttpClientModel implements HttpClientInterface {
    private getToken(): string {
        const tokenKey = config.api_token_key;
        return localStorage.getItem(tokenKey) || '';
    }

    private createOptions(requiresToken: boolean): AxiosRequestConfig {
        const headers: Record<string, string> = {};

        if (requiresToken) {
            const token = this.getToken();
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return { headers };
    }

    async get<T>(params: HttpRequestParamsInterface): Promise<T> {
        const { url, requiresToken } = params;

        try {
            const options = this.createOptions(requiresToken);
            const response: AxiosResponse<T> = await axios.get(url, options);
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async post<T>(params: HttpRequestParamsInterface): Promise<T> {
        const { url, requiresToken, payload } = params;

        try {
            const options = this.createOptions(requiresToken);
            const response: AxiosResponse<T> = await axios.post(url, payload, options);
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
