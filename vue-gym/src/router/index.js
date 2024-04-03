import { createRouter, createWebHistory } from 'vue-router'
import TrainerLoginSuccess from '../views/trainer/TrainerLoginSuccess.vue'
import TrainerJoinForm from '../views/trainer/TrainerJoinForm.vue'
import TrainerLoginView from '../views/trainer/TrainerLoginView.vue'
import TrainerIntroductionView from '../views/trainer/TrainerIntroductionView.vue'
import trainerEnrollView from '../views/trainer/trainerEnrollView.vue'
import trainerEnrollTwoView from '../views/trainer/trainerEnrollTwoView.vue'
import MyMemberListView from '../views/trainer/MyMemberListView.vue'
import MemberLoginView from '../views/member/MemberLoginView.vue'
import AfterLoginFormView from '../views/member/AfterLoginFormView.vue'


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
  {
    path: '/gym/memberlogin',
    name: '/gym/memberlogin',
    component: MemberLoginView
  },
  {
    path: '/gym/memberloginsussecc',
    name: '/gym/memberloginsussecc',
    component: AfterLoginFormView
  },
  {
    path: '/gym/trainerenroll',
    name: '/gym/trainerenroll',
    component: trainerEnrollView
  },
  {
    path: '/gym/trainerenrolltwo',
    name: '/gym/trainerenrolltwo',
    component: trainerEnrollTwoView
  },
  {
    path: '/gym/mymemberList',
    name: '/gym/mymemberList',
    component: MyMemberListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
