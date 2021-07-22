<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <el-divider content-position="left">{{ $t("blueprint_group") }}</el-divider>
    <div>
      <el-radio-group v-model="itemFilter">
        <el-radio label="BlueprintS4DR" border>{{ $t("BlueprintS4DR") }}</el-radio>
        <el-radio label="BlueprintAgir" border>{{ $t("BlueprintAgir") }}</el-radio>
        <el-radio label="BlueprintHakuryuu" border>{{ $t("BlueprintHakuryuu") }}</el-radio>
        <el-radio label="BlueprintS4PRY" border>{{ $t("BlueprintS4PRY") }}</el-radio>
        <el-radio label="BlueprintAnchorage" border>{{ $t("BlueprintAnchorage") }}</el-radio>
        <el-radio label="BlueprintAugust" border>{{ $t("BlueprintAugust") }}</el-radio>
        <el-radio label="BlueprintMarcopolo" border>{{ $t("BlueprintMarcopolo") }}</el-radio>
      </el-radio-group>
    </div>
    <el-divider content-position="left">{{ $t("data_group") }}</el-divider>
    <div>
      <el-radio-group v-model="projectFilter">
        <el-radio label="by_genre_duration" border>{{ $t("by_genre_duration") }}</el-radio>
        <el-radio label="by_genre" border>{{ $t("by_genre") }}</el-radio>
        <el-radio label="by_duration" border>{{ $t("by_duration") }}</el-radio>
        <el-radio label="by_project" border>{{ $t("by_project") }}</el-radio>
      </el-radio-group>
    </div>
    <research-table :json-data="jsonData" :item-filter="itemFilter" :project-filter="projectFilter"></research-table>
    <get-source :json-file=jsonFile></get-source>
  </div>
</template>

<script>
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"
  import ResearchTable from "../components/ResearchTable"

  export default {
    name: "Research4Projects",
    components: {ResearchTable, GetSource},
    data() {
      return {
        jsonData: {},
        jsonFile: "research4_blueprints.json",
        itemFilter: "BlueprintS4DR",
        projectFilter: "by_genre_duration",
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;

      })
    },
    methods: {}
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "四期科研 - 蓝图掉落",
  "data_group": "数据分组",
  "by_project": "展开全部",
  "by_genre": "按类别",
  "by_duration": "按时长",
  "by_genre_duration": "按类别和时长"
  },
  "en-US": {
  "title": "Research S4 - Blueprint Drops",
  "data_group": "Data Grouping",
  "by_project": "Show all",
  "by_genre": "By genre",
  "by_duration": "By duration",
  "by_genre_duration": "By genre and duration"
  }
  }
</i18n>

<style scoped>
  /deep/ .el-radio {
    margin: 5px;
    width: 215px;
  }
  /deep/ .el-radio.is-bordered+.el-radio.is-bordered {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
