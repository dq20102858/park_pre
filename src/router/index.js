import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/defaultMain',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/defaultMain',
        component: () => import('@/views/defaultMain/index')
      }
    ]
  },
  {
    path: '/building',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/buildlist',
        component: () => import('@/views/building/list')
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/message',
        component: () => import('@/views/message/index')
      },
    ]
  }
]
export { constantRouterMap }

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

//路由组件注册
export const asyncRouterMap = {

  '/views/layout/Layout': () => import('@/views/layout/Layout'),
  // '/views/defaultMain/index': () => import('@/views/defaultMain/index'),
  // '/views/message/index': () => import('@/views/message/index'),
  // '/views/message/list': () => import('@/views/message/list')
}
