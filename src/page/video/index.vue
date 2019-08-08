<template>
  <el-card shadow="always">
    <div>

      <div class="video-box-two">
        <video
          id="myVideo"
          class="video-js vjs-big-play-centered"
          ref='videoRef'>
          <source src="/cctvApi/hls/cctv1.m3u8">
        </video>
      </div>
      <div class="video-box-two">
        <div>
          <el-popover
            placement="right"
            width="200"
            trigger="click">
            <div>
              <el-row :gutter="20">
                <el-col class="ykq-btn-box" :span="8" v-for="(item,i) in cctvTypeBtns">
                  <el-tooltip :content="item.minNmae" placement="bottom" effect="light">
                    <el-button class="ykq-btn" type="primary" circle @click="btnClick(item)">{{item.btnName}}</el-button>
                  </el-tooltip>
                </el-col>
              </el-row>
            </div>
            <el-button type="primary" slot="reference">遥控器</el-button>
          </el-popover>
        </div>
      </div>

    </div>
  </el-card>

</template>
<script>
  import axios from 'axios';
  export default {
    name: 'index',
    data () {
      return {
        cctvTypeBtns:[]
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init () {
        this.initVideo();
      },
      initVideo(){
        let that = this;
        let myPlayer = this.$video('myVideo',{
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          width: "400px",
        },
          function onPlayerReady(){
            this.play();
            setTimeout(() => {   //延时确保能监听到视频源错误
              var mediaError = this.error();
              if(mediaError!=null && mediaError.code){
                that.$message.error('错了哦，这是一条错误消息');
              }
            },1000);
          });
        this.getUrl(myPlayer)
      },
      getUrl(myPlayer){
        axios.get('/static/cctv_url.json',{}).then(res=>{
          this.cctvTypeBtns = res.data.data;
        })
      },
      btnClick (obj) {
        const videos = this.$video(this.$refs.videoRef);
        videos.src(obj.url);
        videos.load();
        videos.currentTime(0);
      },
    },

    beforeDestroy(){
      const videoDom = this.$refs.videoRef;   //不能用document 获取节点
      this.$video(videoDom).dispose();  //销毁video实例，避免出现节点不存在 但是flash一直在执行,也避免重新进入页面video未重新声明
    },
    destroyed(){}
  }
</script>

<style scoped>
  .video-box-two{
    display: inline-block;
    vertical-align: top;
    padding-right: 20px;
  }
  .ykq-btn-box{
    text-align: center;
    padding: 10px 0;
  }
  .ykq-btn{
    width: 40px;
    height: 40px;
  }
  .video-js.vjs-playing .vjs-tech {
    pointer-events: auto;
  }
  .video-js .vjs-big-play-button{
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: #73859f;
    background-color: rgba(115,133,159,.5);
    border-width: 0.15em;
    margin-top: -1.25em;
    margin-left: -1.75em;
  }
  /* 中间的播放箭头 */
  .vjs-big-play-button .vjs-icon-placeholder {
    font-size: 1.63em;
  }
  /* 加载圆圈 */
  .vjs-loading-spinner {
    font-size: 2.5em;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    margin-top: -1em;
    margin-left: -1.5em;
  }
</style>
