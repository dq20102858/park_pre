import router from './router/index'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect'] // no redirect whitelist

const mapRouters= [
  {
    id: 1,
    moduleAction: "defaultMain",
    moduleIcon: "monitor",
    moduleName: "项目概況",
    isChildren: 0,
    children: []
  },
  {
    id: 2,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "综合安防",
    isChildren: 0,
    children: []
  },
  {
    id: 3,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "车辆管理",
    isChildren: 0,
    children: []
  },
  {
    id: 4,
    moduleAction: "building",
    moduleIcon: "monitor",
    moduleName: "楼宇自控",
    isChildren: 1,
    children: [
      {
        id: 22,
        moduleAction: "building",
        moduleIcon: "monitor",
        moduleName: "智能照明 ",
        modulePath: "buildlist"
      },
      {
        id: 33,
        moduleAction: "building",
        moduleIcon: "monitor",
        moduleName: "空调集控",
        modulePath: "buildlist"
      },
      {
        id: 34,
        moduleAction: "building",
        moduleIcon: "monitor",
        moduleName: "用电管理",
        modulePath: "buildlist"
      },
      {
        id: 35,
        moduleAction: "building",
        moduleIcon: "monitor",
        moduleName: "电动窗帘",
        modulePath: "buildlist"
      },
      {
        id: 43,
        moduleAction: "building",
        moduleIcon: "monitor",
        moduleName: "电梯管理",
        modulePath: "buildlist"
      }
    ]
  },
  {
    id: 5,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "会务管理",
    isChildren: 0,
    children: []
  },
  {
    id: 6,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "设备管理",
    isChildren: 0,
    children: []
  },
  {
    id: 7,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "消防管理",
    isChildren: 0,
    children: []
  },
  {
    id: 8,
    moduleAction: "",
    moduleIcon: "monitor",
    moduleName: "人员管理",
    isChildren: 0,
    children: []
  },
  {
    id: 9,
    moduleAction: "message",
    moduleIcon: "monitor",
    moduleName: "系统配置",
    isChildren: 0,
    children: []
  }
]
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) {
   
    // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is home will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store
          .dispatch('GetUserInfo')
          .then(res => {
            // 拉取user_info
            const access = mapRouters // note: roles must be a array! such as: ['editor','develop']
            const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
            store.dispatch('GenerateRoutes', { access, roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
            // const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
            // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            // })
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err || 'Verification failed, please login again')
              next({ path: '/' })
            })
          })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next() //
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
