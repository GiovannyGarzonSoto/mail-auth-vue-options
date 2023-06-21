import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import authRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "signinView" */ '../modules/auth/views/SigninView.vue'),
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "selectorView" */ '../views/Void.vue'),
    meta: {
      required: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoutes = to.matched.some(record => record.meta.required)
  if(protectedRoutes && !store.state.user){
    next('/auth/signin')
  }else{
    next()
  }
})

export default router