<template>
  <el-menu
    :default-openeds='["1"]'
    class="menu"
    background-color="#4e4c97"
    text-color="#ececf0"
    active-text-color="#ffffff"
    router>
    <div class="stats-icon"></div>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ $t("overview") }}</span>
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-document"></i>
        <span>{{ $t("research4") }}</span>
      </template>
      <el-menu-item index="/research4-projects">
        <span slot="title">{{ $t("project_appear") }}</span>
      </el-menu-item>
      <el-menu-item index="/research4-blueprints">
        <span slot="title">{{ $t("blueprint_drop") }}</span>
      </el-menu-item>
      <el-menu-item index="/research4-equipments">
        <span slot="title">{{ $t("equipment_drop") }}</span>
      </el-menu-item>
      <el-menu-item index="/research4-others">
        <span slot="title">{{ $t("other_drop") }}</span>
      </el-menu-item>
    </el-submenu>
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
  "overview": "总览",
  "research4": "四期科研",
  "project_appear": "项目刷新",
  "blueprint_drop": "科研蓝图",
  "equipment_drop": "装备设计图",
  "other_drop": "其他物品"
  },
  "en-US": {
  "overview": "Overview",
  "research4": "Research S4",
  "project_appear": "Project Appear",
  "blueprint_drop": "Research Blueprints",
  "equipment_drop": "Equipment Designs",
  "other_drop": "Other Items"
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
