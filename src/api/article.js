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

const baseApiUrl = '/api/vadmin/api/'

const getUrl = function(url) {
  return baseApiUrl + url
}

// 通过guid获取文章分类菜单名称
export function getMenuForLive(params) {
  return service({
    url: getUrl('/getMenuForLive'),
    method: 'post',
    data: params
  })
}

//
export function createArticleMenu(params) {
  return service({
    url: getUrl('/createArticleMenu'),
    method: 'post',
    data: params
  })
}

export function listArticleMenu(params) {
  return service({
    url: getUrl('/listArticleMenu'),
    method: 'post',
    data: params
  })
}

// 删除文章菜单分类
export function deleteArticleMenu(params) {
  return service({
    url: getUrl('/deleteArticleMenu'),
    method: 'post',
    data: params
  })
}

export function editArticleMenu(params) {
  return service({
    url: getUrl('/editArticleMenu'),
    method: 'post',
    data: params
  })
}

