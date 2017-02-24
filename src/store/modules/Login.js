export default{
  state:{
    isLogin:false
  },
  mutations:{
    setLogin(state){
      state.isLogin = !state.isLogin;
    }
  }
}
