import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router.onfig"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: "/admin",
  routes
})

//登录权限控制
router.beforeEach((to, from, next) => {
  const accessToken = window.sessionStorage.getItem('token')
  //let auth = to.matched[0].meta.requiresAuth 控制最外层就行
  let auth = to.meta.requiresAuth //控制当前的地址 无层数限制
  console.log(auth)
  if (auth) {
    if (!accessToken) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
