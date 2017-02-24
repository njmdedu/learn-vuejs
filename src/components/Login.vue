<template lang="html">
  <div class="">
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
  .myform{
    padding:15px;
  }
</style>
