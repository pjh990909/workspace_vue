import { createRouter, createWebHistory } from 'vue-router'
import TrainerLoginSuccess from '../views/TrainerLoginSuccess.vue'
import TrainerJoinForm from '../views/TrainerJoinForm.vue'
import TrainerLoginView from '../views/TrainerLoginView.vue'
import TrainerIntroductionView from '../views/TrainerIntroductionView.vue'

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
  {
    path: '/gym/trainerlogin',
    name: '/gym/trainerlogin',
    component: TrainerLoginView
  },
  {
    path: '/gym/trainerintroduction',
    name: '/gym/trainerintroduction',
    component: TrainerIntroductionView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
