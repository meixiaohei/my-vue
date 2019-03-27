<template>
  <el-menu
    :default-active="path"
    @select="selectItem"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    router
  >
    <template v-for="item in menus">
      <el-menu-item v-if="item.authorityType === 1" :index="item.path">{{item.name}}</el-menu-item>
      <el-submenu v-if="item.authorityType === 2" :index="item.path">
        <template slot="title">
          {{item.name}}
        </template>
        <div v-for="subItem in item.children">
          <el-menu-item :index="item.path + subItem.path">{{subItem.name}}</el-menu-item>
        </div>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        menus: [],
        path:null
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.apigetPositionById();
      },
      apigetPositionById(){
        axios.get('/static/menus.json',{}).then(res=>{
          this.menus = res.data.data;
        })
      },
      selectItem(key, keyPath){
        this.path = key;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
