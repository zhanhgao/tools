import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/Parent.vue')
  },
  {
    path: '/hoc',
    name: 'Hoc',
    component: () => import('../views/Hoc.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
