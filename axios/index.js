import axios from 'axios'

export const service = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: 'http://localhost:3001'
})

export default service
