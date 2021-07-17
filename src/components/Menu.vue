<template>
  <el-menu
    default-active="1"
    class="menu"
    background-color="#4e4c97"
    text-color="#ececf0"
    active-text-color="#ffffff"
    router>
    <div class="stats-icon"></div>
    <el-menu-item index="/">
      <span slot="title">{{ $t("overview") }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<i18n>
  {
  "zh-CN": {
  "overview": "总览"
  },
  "en-US": {
  "overview": "Overview"
  }
  }
</i18n>

<style scoped>
  .menu {
    position: fixed;
    height: 100%;
    width: 200px;
    left: 0;
    top: 0;
    bottom: 0;
    box-shadow: 0 19px 19px rgba(0, 0, 0, 0.30), 0 15px 6px rgba(0, 0, 0, 0.22);
  }

  .stats-icon {
    height: 200px;
  }

  .el-menu {
    border: 0
  }
</style>
