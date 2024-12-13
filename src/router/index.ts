import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>import('@/views/HomeView.vue')
  },
  {
    path: '/expertise',
    name: 'expertise',
    component: () => import('@/views/ExpertiseView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/views/EducationView.vue')
  },
  {
    path: '/references',
    name: 'references',
    component: () => import('@/views/ReferencesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
