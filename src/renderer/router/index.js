import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
