import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/AddTask',
    name: 'AddTask',
    component: () => import('@/components/AddTask.vue')
  },
  {
    path: '/ListTask',
    name: 'ListTask',
    component: () => import('@/components/ListTask.vue')
  },
  {
    path: '/EditTask/:id',
    name: 'EditTask',
    component: () => import('@/components/EditTask.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
