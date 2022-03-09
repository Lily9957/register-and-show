import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue'
import UserList from '../views/user-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/user-list',
    component: UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router