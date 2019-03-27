<template>
  <div class="layout clear">
    <div class="layoutL fl">
      <TopNav></TopNav>
    </div>
    <div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import TopNav from './topNav'
  export default{
    name: 'layout',
    data(){
      return {
      }
    },
    components: {
      TopNav
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){}
    }
  }
</script>

<style scoped>
  .main{
    padding: 20px;
  }
</style>
