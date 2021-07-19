<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <el-divider content-position="left">{{ $t("data_group") }}</el-divider>
    <div>
      <el-radio-group v-model="group" @change="setGroup">
        <el-radio label="by_genre_duration" border>{{ $t("by_genre_duration") }}</el-radio>
        <el-radio label="by_genre" border>{{ $t("by_genre") }}</el-radio>
        <el-radio label="by_duration" border>{{ $t("by_duration") }}</el-radio>
        <el-radio label="by_all" border>{{ $t("by_all") }}</el-radio>
      </el-radio-group>
    </div>
    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <el-table :data="tableData" stripe style="width: 100%" :cell-style="{padding: '6px'}">
      <el-table-column prop="project" :label="$t('project')" width="240"></el-table-column>
      <el-table-column prop="samples" :label="$t('samples')" width="180"></el-table-column>
      <el-table-column prop="percentage" :label="$t('percentage')"></el-table-column>
    </el-table>
    <get-source :json-file=jsonFile></get-source>
  </div>
</template>

<script>
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"

  export default {
    name: "Research4Projects",
    components: {GetSource},
    data() {
      return {
        jsonData: {},
        jsonFile: "research4_projects.json",
        group: 'by_genre',
        tableData: []
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;
        this.setGroup(this.group)
      })
    },
    methods:{
      setGroup: function (val) {
        this.tableData = this.jsonData[val]
      }
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "四期科研 - 项目刷新概率",
  "data_group": "数据分组",
  "by_all": "展开全部",
  "by_genre": "按类别",
  "by_duration": "按时长",
  "by_genre_duration": "按类别和时长",
  "data_table": "数据表格",
  "project": "项目",
  "samples": "样本数",
  "percentage": "概率"
  },
  "en-US": {
  "title": "Research S4 - Project Appear Possibility",
  "data_group": "Data Grouping",
  "by_all": "Show all",
  "by_genre": "By genre",
  "by_duration": "By duration",
  "by_genre_duration": "By genre and duration",
  "data_table": "Data Table",
  "project": "Project",
  "samples": "Samples",
  "percentage": "Percentage"
  }
  }
</i18n>

<style scoped>

</style>
