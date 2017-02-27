<template lang="html">
  <div class="">
    <h1>{{$route.params.id}}</h1>
    <form class="myform">
      <div class="form-group col-sm-3">
        <label for="exampleInputEmail1">邮箱</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="请输入邮箱">
      </div>
      <div class="form-group col-sm-3">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="请输入密码">
      </div>
      <div class="col-sm-3">
        <a href="javascript:;" class="btn btn-default" @click="showMe">登录</a>
      </div>
    </form>
    <div class="router-row">
        <router-link to="/login/bar/profile">Login-bar</router-link>
        <transition name="slide">
       <router-view></router-view>
     </transition>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: 'zhangwei900808@126.com',
            password: '123456'
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     // 在渲染该组件的对应路由被 confirm 前调用
    //     // 不！能！获取组件实例 `this`
    //     // 因为当钩子执行前，组件实例还没被创建
    //     //console.log('beforeRouteEnter');
    //     next('/example');
    // },
    watch: {
        '$route' (to, from) {
            //对路由变化做出响应
        }
    },
    methods: {
        showMe() {
            alert(this.email)
            alert(this.$store.state.count)
            this.$store.commit('increment')
            this.$store.getters.increment
            alert(this.$store.state.count)

            alert(this.$store.state.login.isLogin)
            this.$store.commit('setLogin')
            alert(this.$store.state.login.isLogin)
        }
    }
}
</script>

<style lang="css">
.router-row{
  widht:500px;
  margin:20px;
}
  .myform{
    padding: 15px;
    height: 100px;
  }
</style>
