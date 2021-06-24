import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'user',
    component: () => import('../views/layouts/User'),
    children : [
      {
        path : '',
        name : 'index',
        component : () => import('../views/Index')
      },
      {
        path : 'gust',
        name : 'gust',
        component : () => import('../views/Gust')
      },
      {
        path : 'gust1',
        name : 'gust1',
        component : () => import('../views/Gust1')
      },
      {
        path : 'table',
        name : 'table',
        component : () => import('../views/Table')
      }
    ],

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
