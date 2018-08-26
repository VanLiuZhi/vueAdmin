import request from '@/utils/request'

// export function loginByUsername(username, password) {
//   const data = {
//     username,
//     password
//   }
//   return request({
//     url: '/login/login',
//     method: 'post',
//     data
//   })
// }

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

import { porxyService } from '../utils/request'

// 代理请求对象实例
const service = porxyService()

let baseApiUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseApiUrl = '/api/user/api/' // 该路由下代理了通用接口的处理方式，若要使用自定义接口路由不要从这里开始
} else {
  baseApiUrl = '/user/api/' // 该路由下代理了通用接口的处理方式，若要使用自定义接口路由不要从这里开始
}

const getUrl = function(url) {
  return baseApiUrl + url
}

export function loginByUsername(params) {
  return service({
    url: getUrl('Login'),
    method: 'post',
    data: params
  })
}

export function getUserInfo(params) {
  return service({
    url: getUrl('getUserInfo'),
    method: 'post',
    data: params
  })
}
