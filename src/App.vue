<template>
  <div id="app">
      <div class="top-nav">
        <i class="el-icon-info icon"></i>
        <div class="icontext">杭电助手</div>
        <i class="el-icon-more iconmore"></i>
      </div>
      
        <el-button>iT's Me</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  margin-left: 5px;
  font-size: 20px;
  color: #fff;
}
.iconmore{
  float: right;
  margin-right: 10px;
  font-size: 20px;
  color: #fff;
  margin-top: 15px;
}
</style>
