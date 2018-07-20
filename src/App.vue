<template>
  <div id="app">
      <div class="top-nav">
        <i class="el-icon-info icon"></i>
        <div class="icontext">Hduhelper杭电助手</div>
        <i class="el-icon-more iconmore"></i>
      </div>
      <swipe
        v-model="index"
        :autoplayTime="autoplayTime"
        id="c-swipe"
      >
        <swipe-item><img src="./assets/12.jpg"/></swipe-item>
        <swipe-item><img src="./assets/15.jpg"/></swipe-item>
        <swipe-item><img src="./assets/58.jpg"/></swipe-item>
      </swipe>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: 0,
      autoplayTime: 2000,

    }
  }
}
</script>

<style>
.top-nav{
  background-color: #3498db;  
  padding: 0;
  line-height: 50px;
  height: 50px;
}
.icon{
  float: left;
  margin-left: 10px;
  font-size: 30px;
  color: #fff;
  margin-top: 10px;
}
.icontext{
  float: left;
  margin-left: 10px;
  font-size: 15px;
  color: #fff;
}
.iconmore{
  float: right;
  margin-right: 10px;
  font-size: 20px;
  color: #fff;
  margin-top: 15px;
}
#c-swipe{
  text-align: center; 
  line-height: 200px; 
  height: 200px; 
  background: #42b983;
}
#c-swipe swipe-item{
  height: 200px; 
  line-height: 200px
}
#c-swipe swipe-item img{
  width: 100%;
}
</style>
