import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '../components/Example.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Menu from '../components/Menu.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path:'/',component:Home
      },
      {
        path:'/example',component:Example
      },
      {
        path:'/login',component:Login
      },
      {
        path:'/menu',component:Menu
      }
    ],
    mode: 'history',
})

export default router;
