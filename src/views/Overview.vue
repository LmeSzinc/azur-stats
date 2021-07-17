<template>
  <div>
    <p class="title">{{ $t("title") }}</p>
    <p class="description">{{ $t("description") }}</p>
    <div class="update">
      <el-divider content-position="left">{{ $t("update") }}</el-divider>
      <el-row :gutter="20">
        <el-col :span="14">
          <div class="update-data">{{ jsonData.update_time }}</div>
          <div class="update-description">{{ $t("last_update") }} {{ jsonData.update_time_full }}</div>
        </el-col>
        <el-col :span="5" class="right-text">
          <div class="update-data">{{ jsonData.uploads_in_24h }}</div>
          <div class="update-description">{{ $t("uploads_in_24h") }}</div>
        </el-col>
        <el-col :span="5" class="right-text">
          <div class="update-data">{{ jsonData.uploads_total }}</div>
          <div class="update-description">{{ $t("uploads_total") }}</div>
        </el-col>
      </el-row>
    </div>

    <div class="chart">
      <ve-line :data="chartData" :settings="chartSettings" :colors="colors" :extend="chartExtend"></ve-line>
    </div>
    <get-source :json-file=jsonFile></get-source>
  </div>
</template>

<script>
  import "echarts/lib/component/grid";
  import VeLine from "v-charts/lib/line.common"
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"

  export default {

    name: "Home",
    components: {GetSource, VeLine},
    data() {
      return {
        jsonData: {},
        jsonFile: "overview.json",
        colors: ["#4e4c97",],
        chartSettings: {
          "min": 0,
          "area": true,
        },
        chartData: {},
        chartExtend: {
          legend: {
            bottom: 0
          }
        }
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;
        this.chartData = res.uploads_history_24h;
        console.log(this.chartData)
      })
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "碧蓝统计局",
  "description": "碧蓝航线国服、日服、国际服、台服掉落数据匿名统计。",
  "update": "数据概况",
  "last_update": "上一次更新:",
  "uploads_in_24h": "24小时内上传",
  "uploads_total": "累计上传",
  "uploads": "24小时内上传"
  },
  "en-US": {
  "title": "Azur Stats",
  "description": "Anonymous drop rate statistics for Azur Lane CN, JP, EN, TW.",
  "update": "Data Overview",
  "last_update": "Last Update:",
  "uploads_in_24h": "Uploads in 24H",
  "uploads_total": "Total uploads",
  "uploads": "Uploads in 24 Hours"
  }
  }
</i18n>

<style scoped>
  .title {
    margin-top: 100px;
    margin-bottom: 20px;

    font-weight: normal;
    font-size: 48px;
  }

  .update {
    margin-top: 360px;
  }

  .update-data {
    font-family: Roboto, sans-serif;
    font-size: 40px;
    font-weight: 300;
    color: #a3a3a3;
  }

  .right-text {
    text-align: right;
  }

</style>
