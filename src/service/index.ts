import QURequest from '@/service/request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const quRequest = new QURequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.get('token')
      if (token) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

// export const quRequest2 = new QURequest({
//   baseURL: '地址二'
// })

export default quRequest
