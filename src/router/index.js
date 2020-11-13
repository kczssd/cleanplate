import Vue from 'vue'
import VueRouter from 'vue-router'
import Infor from '../views/Infor.vue'
import login from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/infor',
    name: 'Infor',
    component: Infor
  },
  {
    path: '/',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
