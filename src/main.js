import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})

const app = new Vue({
  router
}).$mount('#app')

//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
