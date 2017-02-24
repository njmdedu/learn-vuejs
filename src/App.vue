<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <div class="links">
        <router-link to="/learn-vuejs">Home</router-link>
        <router-link to="/learn-vuejs/example">Example</router-link>
        <router-link to="/learn-vuejs/login">Login</router-link>
        <router-link to="/learn-vuejs/elecomponents">Element Components</router-link>
    </div>
    <div class="">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
