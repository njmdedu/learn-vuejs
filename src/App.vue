<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/example">Example</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/elecomponents">Element Components</router-link>
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
