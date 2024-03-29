import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import AddListView from '@/views/guestbook/AddListView.vue'
import DelFormView from '@/views/guestbook/DelFormView.vue'
import ListView from '@/views/board/ListView.vue'
import BoardModifyFormView from '@/views/board/BoardModifyFormView.vue'
import ReadView from '@/views/board/ReadView.vue'
import WriteFormView from '@/views/board/WriteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: '/user/loginform',
    component: LoginFormView
  },
  {
    path: '/user/joinok',
    name: '/user/joinok',
    component: JoinOkView
  },
  {
    path: '/user/modifyform',
    name: '/user/modifyform',
    component: ModifyFormView
  },
  {
    path: '/user/joinform',
    name: '/user/joinform',
    component: JoinFormView
  },
  {
    path: '/attach/result',
    name: '/attach/result',
    component: AttachResultView
  },
  {
    path: '/attach/attachform',
    name: '/attach/attachform',
    component: AttachFormView
  },
  {
    path: '/guestbook/addlist',
    name: '/guestbook/addlist',
    component: AddListView
  },
  {
    path: '/guestbook/delete/:no',
    name: '/guestbook/delete',
    component: DelFormView
  },
  {
    path: '/board/list',
    name: '/board/list',
    component: ListView
  },
  {
    path: '/board/modify',
    name: '/board/modify',
    component: BoardModifyFormView
  },
  {
    path: '/board/read/:no',
    name: '/board/read',
    component: ReadView
  },
  {
    path: '/board/write',
    name: '/board/write',
    component: WriteFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
