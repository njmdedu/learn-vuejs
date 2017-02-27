import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'

//Vue.use(axios)
// Vue.prototype.$http = axios
// this.$http.get(URL).then(response => {
//     // success callback
// }, response => {
//     // error callback
// })

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
