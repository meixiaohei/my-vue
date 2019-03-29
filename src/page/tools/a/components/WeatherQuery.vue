<template>
    <div class="weatherBox">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入地区名"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button :type="btnType" @click="weatherQuerySumbit">查询</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-collapse v-model="activeNames" accordion class="weatherList">
            <el-collapse-item v-for="(item,index) in weatherList" :title="item.date" :name="index" :key="index">
              <div>温度： {{item.low}} ~ {{item.high}}（c）</div>
              <div>天气状态（白）： {{item.text_day}}</div>
              <div>天气状态（夜）： {{item.text_night}}</div>
              <div>风向： {{item.wind_direction}}</div>
              <div>风速： {{item.wind_speed === ''?'--':item.wind_speed}} （km/h）</div>
              <div>风力等级： {{item.wind_scale === ''?'--':item.wind_scale}} （级）</div>
              <div>降水率： {{item.precip === ''?'--':item.precip}} （%） </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col :span="12">
          <v-chart :options="polar"/>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import api from '@/api/api';
  import ECharts from 'vue-echarts';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/polar';
  const colors = [ '#d14a61','#5793f3', '#675bba'];
  export default {
    name: 'WeatherQuery',
    components: {
      'v-chart': ECharts
    },
    data () {
      return {
        daysMax:[],
        daysMin:[],
        weatherMax:[],
        weatherMin:[],
        activeNames: ['0'],
        btnType:'primary',
        input: '',
        weatherList:[],
        polar: {}
      }
    },
    methods:{
      weatherQuerySumbit(){
        let daysMax = [];
        let daysMin = [];
        let weatherMax = [];
        let weatherMin = [];
        let map = {};
        map.key = 'tikc8suyzbve6gab';
        map.location = this.input;
        map.language = 'zh-Hans';
        map.unit = 'c';
        map.start = 0;
        map.days = 10;
        api.get('/v3/weather/daily.json',{...map}).then(res=>{
          let weatherList = res.results[0].daily;
          [...weatherList].forEach((item)=>{
            daysMax.push(item.date+'（高）')
            daysMin.push(item.date+'（低）')
            weatherMax.push(item.high)
            weatherMin.push(item.low)
          })
          this.weatherList = weatherList;
          this.daysMax = daysMax;
          this.daysMin = daysMin;
          this.weatherMax = weatherMax;
          this.weatherMin = weatherMin;
          this.chartsObjFn(daysMax, daysMin, weatherMax, weatherMin)
        })
      },
      chartsObjFn(daysMax, daysMin, weatherMax, weatherMin){
        let option = {
          color: colors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data:['最高温', '最低温']
          },
          grid: {
            top: 40,
            bottom: 40
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '温度  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: daysMin
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '温度  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: daysMax
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name:'最高温',
              type:'line',
              xAxisIndex: 1,
              smooth: true,
              data: weatherMax
            },
            {
              name:'最低温',
              type:'line',
              smooth: true,
              data: weatherMin
            }
          ]
        };
        this.polar = {...option};
      }
    }
  }
</script>

<style scoped>
  .weatherBox{
    height: 434px;
  }
  .weatherList{
    margin-top: 30px;
  }
</style>
