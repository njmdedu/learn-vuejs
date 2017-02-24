import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '../components/Example.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import EleComponents from '../components/ElementComponents.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path:'/learn-vuejs',component:Home
      },
      {
        path:'/learn-vuejs/example',component:Example
      },
      {
        path:'/learn-vuejs/login',component:Login
      },
      {
        path:'/learn-vuejs/elecomponents',component:EleComponents
      }
    ],
    mode: 'history',
})

export default router;
