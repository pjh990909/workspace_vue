import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import ModifyFormView from '../views/ModifyFormView.vue'
import WriteFormView from '../views/WriteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: ListView
  },
  {
    path: '/phonebook/modifyform/:personId',
    name: '/phonebook/modifyform',
    component: ModifyFormView
  },
  {
    path: '/phonebook/writeform',
    name: '/phonebook/writeform',
    component: WriteFormView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
