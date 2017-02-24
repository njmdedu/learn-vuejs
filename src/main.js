import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

// const app = new Vue({
//     router
// }).$mount('#app')


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
