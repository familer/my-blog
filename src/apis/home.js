// 这里不允许使用 require 格式
import request from 'utils/config.js'

export function getData() {
  return request({
    url: '/home',
    method: 'get'
  })
}
