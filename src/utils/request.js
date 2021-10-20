import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com',
  timeout: 3000,
})
// 请求拦截
service.interceptors.request.use(config => {
  console.log('请求拦截')
  Toast.loading({
    message: '加载中',
    duration: 0,
  })
  config.headers.token = 'abcdefghijklmn'
  config.headers['x-platform'] = 'pc'
  return config
})
// 响应拦截
service.interceptors.response.use((response) => {
  console.log('响应拦截', response)
  Toast.clear()
  if (response.status >= 200 && response.status < 300) {
    const { code, data } = response.data
    if (code === 200) {
      return data
    }
  }
  const err = new Error('请求出错')
  err.errpr = response
  return Promise.rejected(err)
})
export default service
