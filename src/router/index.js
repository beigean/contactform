import Vue from 'vue'
import VueRouter from 'vue-router'
import Page01 from '../components/Page01.vue'
import Page02 from '../components/Page02.vue'
import Page03 from '../components/Page03.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/01',
    name: 'Page01',
    component: Page01
  },
  {
    path: '/02',
    name: 'Page02',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Page02
  },
  {
    path: '/03',
    name: 'Page03',
    component: Page03
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
