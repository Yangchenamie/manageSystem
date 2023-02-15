<template>
  <div id="app">
    <!-- <loginPage></loginPage> -->
    <mainPage></mainPage>
  </div>
</template>

<script>
import MainPage from './page/mainPage.vue'

// import loginPage from '../page/loginPage.vue'
export default {
  name: 'App',
  components: {
    // loginPage,
    MainPage
  }
}
</script>

<style lang="less">
body{
  height: 100%;
  background-color: rgba(242, 242, 242, 1);
  margin: auto;
}
</style>
