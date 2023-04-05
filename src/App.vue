<template>
  <div id="app">
    <!-- <loginPage></loginPage> -->
    <!-- <mainPage></mainPage> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from './page/mainPage.vue'

import loginPage from './page/loginPage.vue'
import router from './router';
export default {
  name: 'App',
  components: {
    loginPage,
    MainPage,
    router
}
}
</script>

<style scoped lang="less">
body{
  width: 100%;
  background-color: rgba(242, 242, 242, 1);
  margin: auto;
}
</style>
