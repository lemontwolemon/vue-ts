import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface QURequsetInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (err: any) => any
}
export interface QURequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QURequsetInterceptors<T>
  showLoading?: boolean
}
