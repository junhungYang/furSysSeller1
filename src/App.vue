<template>
  <div id="app">
    <!-- <test></test> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import wx from 'weixin-js-sdk'
import axios from 'axios'
import test from '@/components/datePicker'
export default {
  created() {
  },
  components: {
    test
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
