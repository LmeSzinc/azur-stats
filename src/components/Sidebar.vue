<template>
  <div>
    <div class="page-header">
      <div @click="openSidebar" style="display: flex">
        <div class="back-arrow" style="display: flex">
          <i class="el-icon-menu" style="margin: auto"></i>
        </div>
        <div class="header-title">{{ $t($route.path) }}</div>
      </div>
    </div>
    <div class="overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>
    <el-menu
      :default-openeds='["1"]'
      :class="['sidebar', {'closed-sidebar': !isSidebarOpen}]"
      text-color="#ececf0"
      active-text-color="#ececf0"
      :default-active="$route.path"
      @select="closeSidebar"
      router
    >
      <div class="stats-icon"></div>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ $t("/") }}</span>
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-document"></i>
          <span>{{ $t("research4") }}</span>
        </template>
        <el-menu-item index="/research4-projects">
          <span slot="title">{{ $t("/research4-projects") }}</span>
        </el-menu-item>
        <el-menu-item index="/research4-blueprints">
          <span slot="title">{{ $t("/research4-blueprints") }}</span>
        </el-menu-item>
        <el-menu-item index="/research4-equipments">
          <span slot="title">{{ $t("/research4-equipments") }}</span>
        </el-menu-item>
        <el-menu-item index="/research4-equipments-20210819">
          <span slot="title">{{ $t("/research4-equipments-20210819") }}</span>
        </el-menu-item>
        <el-menu-item index="/research4-others">
          <span slot="title">{{ $t("/research4-others") }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/api">
        <i class="el-icon-upload2"></i>
        <span slot="title">{{ $t("/api") }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        isSidebarOpen: false
      }
    },
    methods: {
      openSidebar: function () {
        this.isSidebarOpen = true
      },
      closeSidebar: function () {
        this.isSidebarOpen = false
      },
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "/": "总览",
  "research4": "四期科研",
  "/research4-projects": "项目刷新",
  "/research4-blueprints": "科研蓝图",
  "/research4-equipments": "装备设计图",
  "/research4-equipments-20210819": "装备 20210819",
  "/research4-others": "其他物品",
  "/api": "API 文档"
  },
  "en-US": {
  "/": "Overview",
  "research4": "Research S4",
  "/research4-projects": "Project Appear",
  "/research4-blueprints": "Research Blueprints",
  "/research4-equipments": "Equipment Designs",
  "/research4-equipments-20210819": "Equipment (20210819)",
  "/research4-others": "Other Items",
  "/api": "API Documentation"
  }
  }
</i18n>

<style scoped>
  .sidebar {
    position: fixed;
    height: 100%;
    width: 200px;
    left: 0;
    top: 0;
    bottom: 0;
    box-shadow: 0 0 19px rgba(0, 0, 0, 0.30), 0 0 6px rgba(0, 0, 0, 0.22);
  }

  .page-header {
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    font-size: 22px;
    color: #ececf0;
    background-color: #4e4c97;
    box-shadow: 0 0 19px rgba(0, 0, 0, 0.30), 0 0 6px rgba(0, 0, 0, 0.22);
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .back-arrow {
    width: 60px;
    height: 60px;
  }

  .header-title {
    margin: auto;
    margin-left: 10px;
  }

  .stats-icon {
    height: 200px;
  }

  /deep/ .el-menu {
    border: 0;
    background-color: #4e4c97;
  }

  /deep/ .el-submenu__title:hover {
    background-color: #3e3d79;
  }

  .el-menu-item {
    background-color: #4e4c97;
  }

  .el-menu-item:hover {
    background-color: #3e3d79;
  }

  .el-menu-item.is-active {
    background-color: #ff6c66;
    color: #000000;
  }

  @media screen and (max-width: 1200px) {
    .closed-sidebar {
      display: none;
    }

    .page-header {
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    .closed-sidebar {
      display: block;
    }

    .page-header {
      display: none;
    }
  }

  @media screen and (min-width: 1500px) {
    .closed-sidebar {
      display: block;
    }

    .page-header {
      display: none;
    }
  }
</style>
