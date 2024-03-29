import { createRouter, createWebHistory } from 'vue-router'
import TrainerLoginSuccess from '../views/TrainerLoginSuccess.vue'
import TrainerJoinForm from '../views/TrainerJoinForm.vue'

const routes = [
  {
    path: '/gym/tls',
    name: '/gym/tls',
    component: TrainerLoginSuccess
  },
  {
    path: '/gym/trainerjoin',
    name: '/gym/trainerjoin',
    component: TrainerJoinForm
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
