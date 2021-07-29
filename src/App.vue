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
    <sidebar></sidebar>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Language from './components/Language'

  export default {
    name: 'App',
    components: {
      Language,
      Sidebar
    },
  }
</script>

<style scoped>
  .content {
    position: fixed;
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

  @media screen and (max-width: 1200px) {
    .content {
      left: 0;
      top: 50px;
    }

    .paper-scroll {
      margin-left: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .content {
      left: 200px;
    }

    .paper-scroll {
      margin-left: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 1500px) {
    .content {
      left: 200px;
    }

    .paper-scroll {
      margin-left: 150px;
      padding-top: 75px;
      padding-bottom: 75px;
    }
  }
</style>

<style>
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>


