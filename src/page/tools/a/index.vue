<template>
  <div>
    <el-card shadow="always">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="天气查询" name="weatherQuery">
          <WeatherQuery/>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import WeatherQuery from './components/WeatherQuery';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        activeName: 'weatherQuery'
      }
    },
    components:{
      WeatherQuery
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
