import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestingComponent from '@/views/TestingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testingcomponent',
      name: 'testingcomponent',
      component: TestingComponent
    }
  ]
})

export default router
