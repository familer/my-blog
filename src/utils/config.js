import axios from 'axios'

// 基本的配置信息
const service = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:3000/api' // 接口地址
})

service.interceptors.request.use(
  config => {
    const Authorization = sessionStorage.getItem('Authorization')
    // // 判断请求方法, 决定是否过滤数据
    // if (config.method === 'GET') {
    //     config.data = JSON.stringify(config.data)
    // } else {
    //     config.data = JSON.parse(config.data)
    // }
    // 设置默认请求头
    config.headers = {
      'Content-Type': 'application/json'
    }
    // 判断是否存在 token
    if (Authorization) {
      config.headers.Authorization = 'Bearer ' + Authorization
    }

    return config
  },
  err => {
    console.log(err)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // debugger
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "用户不存在"
          break
        case 401:
          error.message = error.response.data.msg
          break
        case 422:
          error.message = "用户已存在"
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service
