import axios from 'axios'

class HttpRequest {
  private axiosInstance: any
  constructor(url = '') {
    this.axiosInstance = axios.create({
      // baseURL: `${process.env.VUE_APP_BASE_API_URL}${url}`,
      baseURL: `http://localhost:3000`,
      timeout: 120000
    })

    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    this.axiosInstance.interceptors.request.use(
      (config: any) => config,
      (error: any) => Promise.reject(error)
    )
    this.axiosInstance.interceptors.response.use(
      (response: any) => response,
      (error: any) => Promise.reject(error)
    )
  }

  public get(methodName: any, data: any) {
    return this.axiosInstance.get(methodName, {
      params: data
    })
  }

  public create(methodName: any, data: any) {
    return this.axiosInstance.post(methodName, data)
  }

  public update(methodName: any, data: any) {
    return this.axiosInstance.put(methodName, data)
  }

  public delete(methodName: any, param: any, data: any) {
    return this.axiosInstance.delete(methodName, {
      params: param,
      data
    })
  }

  public request(type: any, url: any, data: any) {
    let promise = null
    switch (type) {
      case 'GET':
        promise = this.axiosInstance.get(url, { params: data })
        break
      case 'POST':
        promise = this.axiosInstance.post(url, data)
        break
      case 'PUT':
        promise = this.axiosInstance.put(url, data)
        break
      case 'DELETE':
        promise = this.axiosInstance.delete(url, data)
        break
      default:
        promise = this.axiosInstance.get(url, { params: data })
        break
    }
    return promise
  }
}

export default HttpRequest
