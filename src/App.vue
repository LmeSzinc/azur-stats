<template>
  <div id="app">
    <div class="content">
      <div class="paper-scroll">
        <el-card class="paper">
          <language></language>
          <router-view></router-view>
        </el-card>
      </div>
    </div>
    <Menu/>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  import Language from './components/Language'

  export default {
    name: 'App',
    components: {
      Language,
      Menu,
    },

  }
</script>

<style scoped>

  .content {
    position: fixed;
    left: 200px;
    top: 0;
    right: 0;
    bottom: 0;
    background: #ebebeb;
    overflow: auto;
  }

  .paper-scroll {
    margin-left: 150px;
    padding-top: 75px;
    padding-bottom: 75px;

  }

  .paper {
    background: #ffffff;
    min-height: 1200px;
    width: 1000px;
  }

  /deep/ .el-card__body {
    padding: 50px;
  }
</style>

<style>
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>


