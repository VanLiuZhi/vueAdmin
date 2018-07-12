import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

import { porxyService } from '../utils/request'

// 代理请求对象实例
const service = porxyService()

const baseApiUrl = '/api/vadmin/api/menu'

const getUrl = function(url) {
  return baseApiUrl + url
}

export function getMenuForLive(params) {
  return service({
    url: getUrl('/getMenuForLive'),
    method: 'post',
    data: params
  })
}

export function createMenu(params) {
  return service({
    url: getUrl('/createMenu'),
    method: 'post',
    data: params
  })
}

export function getMenuTable(params) {
  return service({
    url: getUrl('/getMenuTable'),
    method: 'post',
    data: params
  })
}

