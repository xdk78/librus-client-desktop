import Vue from 'vue'
import Router from 'vue-router'
import Main from '../layout/Main.vue'
import home from '../components/Home.vue'
import login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainlayout',
      name: 'mainlayout',
      component: Main
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
