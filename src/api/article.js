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

const baseApiUrl = '/api/vadmin/api/' // 该路由下代理了通用接口的处理方式，若要使用自定义接口路由不要从这里开始

const getUrl = function(url) {
  return baseApiUrl + url
}

// 创建文章分类
export function createArticleClassify(params) {
  return service({
    url: getUrl('/createArticleClassify'),
    method: 'post',
    data: params
  })
}

// 文章分类列表数据
export function listArticleClassify(params) {
  return service({
    url: getUrl('/listArticleClassify'),
    method: 'post',
    data: params
  })
}

// 删除文章分类
export function deleteArticleClassify(params) {
  return service({
    url: getUrl('/deleteArticleClassify'),
    method: 'post',
    data: params
  })
}

// 编辑文章分类
export function editArticleClassify(params) {
  return service({
    url: getUrl('/editArticleClassify'),
    method: 'post',
    data: params
  })
}

// 查询文章分类，返回list
export function getArticleClassifyList(params) {
  return service({
    url: '/api/vadmin/article_api/getArticleClassifyList',
    method: 'post',
    data: params
  })
}

// 查询文章分类，返回list
export function saveArticle(params) {
  return service({
    url: '/api/vadmin/article_api/saveArticle',
    method: 'post',
    data: params
  })
}

// 创建文章
export function createArticle(params) {
  if (params.status === 'edit') {
    const data = {
      object: { 'guid': params.guid },
      update: params
    }
    return service({
      url: getUrl('/editArticle'),
      method: 'post',
      data: data
    })
  } else {
    return service({
      url: getUrl('/createArticle'),
      method: 'post',
      data: params
    })
  }
}

// 文章列表数据
export function listArticle(params) {
  return service({
    url: getUrl('/listArticle'),
    method: 'post',
    data: params
  })
}

// 通过guid获取文章数据
export function getArticleForGUID(params) {
  params.from_to_admin = true
  return service({
    url: '/api/vadmin/article_api/getArticleForGUID',
    method: 'post',
    data: params
  })
}
