import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import auth from '@/auth/authService.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    },
    {
      path: '/auth-callback',
      name: 'auth-callback',
      component: () =>
        import(/* webpackChunkName: "auth-callback" */ '@/views/AuthCallback.vue'),
    },
  ],
})

function routeShouldSkipAuthentication(route) {
  return (
    route.path === '/' ||
    route.path === '/about' ||
    route.path === '/auth-callback'
  )
}

router.beforeEach((to, _from, next) => {
  console.log('auth.isAuthenticated()', auth.isAuthenticated())
  if (routeShouldSkipAuthentication(to) || auth.isAuthenticated()) {
    return next()
  }
  auth.login({ target: to.path })
})

export default router
