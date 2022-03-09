<template>
  <div id="app">
    <div class="nav-wrapper">
      <ul class="nav">
        <router-link tag="li" to="/register" class="nav-item">用户注册</router-link>
        <router-link tag="li" to="/user-list" class="nav-item">用户列表</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-wrapper {
  border: 2px solid paleturquoise;
  margin-bottom: 30px;
}
ul {
  list-style: none;
}
.nav-item {
  display: inline-block;
  width: 200px;
  background-color: antiquewhite;
  margin-right: 50px;
}
</style>
