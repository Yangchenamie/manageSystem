<template>
  <div id="app">
    <loginPage></loginPage>
  </div>
</template>

<script>

import loginPage from '../page/loginPage.vue'
export default {
  name: 'App',
  components: {
    loginPage
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
