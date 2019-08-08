<template>
  <div>
    <el-card shadow="always">
      {{msg}}
    </el-card>
  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to help',
      }
    },
    mounted(){
      let a = '1000122.00';
      a.replace(',', '');
      console.log(a)
    }
  }
</script>

<style scoped>

</style>
