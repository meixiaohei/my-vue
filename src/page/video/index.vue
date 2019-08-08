<template>
  <div>
    <video id="myVideo" class="video-js">
      <source src="/cctvApi/hls/cctv6hd.m3u8">
    </video>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {}
    },
    mounted(){
      this.initVideo();
    },
    methods: {
      initVideo(){
        let myPlayer = this.$video('myVideo',{

          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          width: "400px",
        })
      }
    },
    destroyed(){}
  }
</script>

<style scoped>

</style>
