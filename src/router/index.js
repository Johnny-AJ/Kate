import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'home',
    redirect: { name: 'reserve' },  // 预定面
    component: () => import('@/layout/home.vue'),
    children: [
      {
        path: '/reserve',
        name: 'reserve',  // 预定页面
        component: () => import('@/views/reserve/reserve.vue')
      },
      {
        path: '/information',
        name: 'information',  // 填写信息
        component: () => import('@/views/information/information.vue')
      }
      ,
      {
        path: '/payment',
        name: 'payment',  // 支付订单
        component: () => import('@/views/payment/payment.vue')
      }
      ,
      {
        path: '/pay',
        name: 'pay',  // pay页面
        component: () => import('@/views/pay/pay.vue')
      }
      ,
      {
        path: '/order',
        name: 'order',  // 订单信息
        component: () => import('@/views/order/order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
