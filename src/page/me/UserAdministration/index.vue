<template>
    <div>
      <el-row>
        <el-col :offset="8" :span="8">
          <div class="userHeadBox">
            <div class="userHead">
              <img :src="isme" alt="">
            </div>
          </div>
          <div class="userHeadTxt">
            <div>
              小卖部部长<i class="el-icon-back"></i>
            </div>
            海纳百川，有容乃大
          </div>
        </el-col>
      </el-row>

      <el-row >
        <el-col v-for="(item,index) in myInfo" :key="index" class="userHeadTxtRow">
          <i :class="item.type"></i>  {{item.title}}
        </el-col>
      </el-row>
      <el-input v-model="input" placeholder="请输入内容"></el-input>

      <div class="line">
        <div></div>
      </div>

      <div>
        <div>标签</div>
        <div>
          <Tag/>
        </div>
      </div>

      <div class="line">
        <div></div>
      </div>

      <div>
        <div class="bigImg">
          <img src="../../../images/4.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import isme from '@/images/isme.jpg';
  import Tag from './Tag';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isme:isme,
        input:'',
        myInfo:[
          {
            title:'交互专家',
            type:'el-icon-edit',
          },{
            title:'某某某公司－某某某事业群－某某平台部－某某技术部－UED',
            type:'el-icon-share',
          },{
            title:'北京市海淀区',
            type:'el-icon-location-outline',
          },
        ]
      }
    },
    components: {
      Tag
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userHeadBox{
    height: 126px;
  }
  .userHead{
    height: 126px;
    width: 126px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
  }
  .userHead img{
    width: 126px;
    position: absolute;
    top: -20px;
  }
  .userHeadTxt{
    text-align: center;
    margin-bottom: 40px;
  }
  .userHeadTxt div{
    margin-bottom: 4px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 20px;
    font-family: "微软雅黑";
    line-height: 30px;
    margin-top: 20px;
  }
  .userHeadTxtRow{
    margin: 10px 0;
  }
  .line{
    padding: 16px 0;
  }
  .line div{
    border-top: 1px #ccc dashed;
  }
  .bigImg img{
    width: 100%;
  }
</style>
