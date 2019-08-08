<template>
  <el-card shadow="always">
    <el-carousel :interval="5000" trigger="click" type="card" height="400px">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="`${item}`" alt="">
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
