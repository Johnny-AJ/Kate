import request from '../utils/myaxios'

// 地区列表
export function getAreaList(params) {
  return request({
    url: '/official/limujin/areaList',
    method: 'get',
    params
  })
}

// 路线列表
export function getLineList(params) {
  return request({
    url: '/official/limujin/lineList',
    method: 'get',
    params
  })
}

// 路线下的产品列表
export function getTicketList(params) {
  return request({
    url: '/official/limujin/ticketList',
    method: 'get',
    params
  })
}

// 下单
export function officialOrder(params) {
  return request({
    url: '/official/limujin/order',
    method: 'post',
    data: params
  })
}