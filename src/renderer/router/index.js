import Vue from 'vue'
import Router from 'vue-router'
import Main from '../layout/Main.vue'
import Timetable from '../components/Timetable.vue'
import Grades from '../components/Grades.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainlayout',
      component: Main,
      children: [
        { path: '/', name: 'timetable', component: Timetable },
        { path: '/grades', name: 'grades', component: Grades }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
