import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '../components/Example.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import EleComponents from '../components/ElementComponents.vue'
import User from '../components/User.vue'
import to404 from '../components/404.vue'
import Map from '../pages/Map.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/example',
            component: Example
        },
        {
            path: '/map',
            component: Map
        },
        {
            path: '/login/:id',
            component: Login,
            children: [
              {
                path:'',
                component:to404
              },{
                path: 'profile',
                component: User
            }]
        },
        {
            path: '/elecomponents',
            component: EleComponents
        }
    ],
    mode: 'history',
})

export default router;
