import type { HttpRequestParamsInterface } from '@/core/http-client/HttpRequestParams.interface'

export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>
}
