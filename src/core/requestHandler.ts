import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios'

export default class RequestHandler  {
  private instance: AxiosInstance = axios.create()
  // get类型请求
  public async get(url: string, params?: any) {
    this.fireRequest('get', url, {}, params)
  }
  // post类型请求
  public async post(url: string, data?: any, params?: any) {
    this.fireRequest('post', url, data, params)
  }
  // delete类型请求
  public async delete(url: string, params?: any) {
    this.fireRequest('delete', url, {}, params)
  }
  // put类型请求
  public async put(url: string, data?: any, params?: any) {
    this.fireRequest('put', url, data, params)
  }
  // head类型请求
  public async head(url: string, params?: any) {
    this.fireRequest('head', url, {}, params)
  }
  // patch类型请求
  public async patch(url: string, data?: any, params?: any) {
    this.fireRequest('patch', url, data, params)
  }
  // patch类型请求
  public async all(options: AxiosRequestConfig) {
    return this.instance(options)
  }
  // 请求核心方法
  private fireRequest(method: Method, url: string, data?: any, params?: any) {
    return new Promise(async (resolve: (value?: unknown) => void, reject: (reason?: any) => void) => {
      try {
        const result = await this.instance.request({
          method,
          url,
          data,
          params,
        })
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }
}
