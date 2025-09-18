import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path:'/projects/:id',
    name: 'ProjectDetail',
    component:ProjectDetail
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
