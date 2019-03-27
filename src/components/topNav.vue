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
    <div class="logo">
      <span class="xiao">小</span>
      <span class="hei">黑</span>
      <span class="za">杂</span>
      <span class="huo">货</span>
      <span class="dian">店</span>
    </div>
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
  .el-menu-item{
    padding: 0 40px;
  }
  .logo{
    width: 160px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    float: left;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 40px;
  }
  .xiao{
    color: #409eff;
    font-family: "PingFang SC";
  }
  .hei{
    color: #67C23A;
    font-family: "Hiragino Sans GB";
  }
  .za{
    color: #E6A23C;
    font-family: "Microsoft YaHei";
  }
  .huo{
    color: #909399;
    font-family: "Helvetica Neue";
  }
  .dian{
    color: #F56C6C;
    font-family: "Microsoft YaHei";
  }
</style>
