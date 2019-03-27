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
  import png1 from '@/images/1.jpg';
  import png2 from '@/images/2.jpg';
  import png3 from '@/images/3.jpg';
  import png4 from '@/images/4.jpg';
  import png5 from '@/images/5.jpg';
  import png6 from '@/images/6.jpg';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        images:[
          png1,
          png2,
          png3,
          png4,
          png5,
          png6
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
