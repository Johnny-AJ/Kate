import request from '../utils/myaxios'

// 地区列表
export function getAreaList(params) {
  return request({
    url: '/official/limujin/areaList',
    methods: 'get',
    params
  })
}

// 路线列表
export function getLineList(params) {
  return request({
    url: '/api/official/limujin/lineList',
    methods: 'get',
    params
  })
}

// 产品列表
export function getTicketList(params) {
  return request({
    url: '/api/official/limujin/ticketList',
    methods: 'get',
    params
  })
}