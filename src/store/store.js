import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule from './modules/Login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    login:LoginModule
  },
  state:{
    count:0
  },
  getters:{
    increment:state=>state.count+=2
  },
  mutations:{
    increment(state){
      state.count++
    }
  },
  actions:{
    increment(context){
      context.commit('increment')
    }
  }
})

export default store;
