import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/User',
    name: 'user.list',
    component: () => import( '../views/User/List.vue')
  },
  {
    path: '/User/create',
    name: 'user.create',
    component: () => import( '../views/User/Form.vue')
  },
  {
    path: '/User/edit/:id',
    name: 'user.edit',
    component: () => import( '../views/User/Form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
