<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <el-divider content-position="left">Research Series</el-divider>
    <el-table :data="seriesData" stripe style="width: 100%" :cell-style="{padding: '6px'}">
      <el-table-column prop="series" :label="$t('project')" width="240"></el-table-column>
      <el-table-column prop="samples" :label="$t('samples')" width="180"></el-table-column>
      <el-table-column prop="rate" :label="$t('rate')"></el-table-column>
    </el-table>

    <el-divider content-position="left">{{ $t("data_group") }}</el-divider>
    <data-filter :data="jsonData.data_group"
                 :filter="dataFilter"
                 :i18n="jsonData.i18n"
                 @setFilter="setDataFilter"
    ></data-filter>
    <!--    Data table-->
    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <!--    ByProject data table       :span-method="objectSpanMethod"-->
    <div v-if="dataFilter === 'ByProject'">
      <el-table
        :data="filteredTableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%"
        :header-cell-style="{'text-align': 'center'}"
        :cell-style="{padding: '6px'}"
      >
        <el-table-column prop="genre" :label="$t('genre')" width="150" align="center">
          <template slot-scope="scope">
            {{ scope.row.genre }}<br>{{ $t(scope.row.genre) }}<br>{{ scope.row.genre_to_all }}
          </template>
        </el-table-column>

        <el-table-column prop="group" :label="$t('group')" width="170" align="center">
          <template slot-scope="scope">
            {{ scope.row.group }}<br>{{ $t(scope.row.group) }}<br>{{ scope.row.group_to_genre }}
          </template>
        </el-table-column>
        <el-table-column prop="project_to_group" :label="$t('project_to_group')" width="105"
                         align="right"></el-table-column>
        <el-table-column :label="$t('project')">
          <el-table-column prop="project" :label="$t('project')" width="100" align="right"></el-table-column>
          <el-table-column prop="name" :label="$t('alias')" width="130" align="right">
            <template slot-scope="scope">{{ $t(scope.row.project) }}</template>
          </el-table-column>
          <el-table-column prop="samples" :label="$t('samples')" align="right"></el-table-column>
          <el-table-column prop="rate" :label="$t('rate')" align="right"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <!--    ByGenreduration data table-->
    <el-table
      v-if="dataFilter === 'ByGenreduration'"
      :data="filteredTableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%"
      :header-cell-style="{'text-align': 'center'}"
      :cell-style="{padding: '6px'}"
    >
      <el-table-column prop="genre" :label="$t('genre')" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.genre }}<br>{{ $t(scope.row.genre) }}<br>{{ scope.row.genre_to_all }}
        </template>
      </el-table-column>
      <el-table-column prop="group_to_genre" :label="$t('group_to_genre')" align="right"></el-table-column>
      <el-table-column :label="$t('project')">
        <el-table-column prop="name" :label="$t('group')" width="180" align="right">
          <template slot-scope="scope">{{ $t(scope.row.project) }}</template>
        </el-table-column>
        <el-table-column prop="project" :label="$t('alias')" width="120" align="right"></el-table-column>
        <el-table-column prop="samples" :label="$t('samples')" align="right"></el-table-column>
        <el-table-column prop="rate" :label="$t('rate')" align="right"></el-table-column>
      </el-table-column>
    </el-table>
    <get-source :json-file=jsonFile></get-source>
  </div>
</template>

<script>
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"
  import DataFilter from "../components/DataFilter"

  export default {
    name: "Research4Projects",
    components: {GetSource, DataFilter},
    data() {
      return {
        jsonData: {},
        jsonFile: "research4_projects.json",
        seriesData: [],
        dataFilter: "ByGenreduration",
        tableData: [],
        spanArr: [], //二维数组，用于存放单元格合并规则
        position: 0, //用于存储相同项的开始index
        filteredTableData: []
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;
        this.$i18n.mergeLocaleMessage('zh-CN', res.i18n["zh-CN"]);
        this.$i18n.mergeLocaleMessage('en-US', res.i18n["en-US"])
      })
    },
    methods: {
      setDataFilter: function (filter) {
        this.dataFilter = filter
      },
      rowspan(idx, prop) {
        this.spanArr[idx] = [];
        this.position = 0;
        this.filteredTableData.forEach((item, index) => {
          if (index === 0) {
            this.spanArr[idx].push(1);
            this.position = 0;
          } else {
            if (this.filteredTableData[index][prop] === this.filteredTableData[index - 1][prop]) {
              this.spanArr[idx][this.position] += 1;//有相同项
              this.spanArr[idx].push(0); // 名称相同后往数组里面加一项0
            } else {
              this.spanArr[idx].push(1); //同列的前后两行单元格不相同
              this.position = index;
            }
          }
        })
      },
      //表格单元格合并
      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        for (let i = 0; i < 2; i++) {
          if (columnIndex === i) {
            const _row = this.spanArr[i][rowIndex];
            const _col = _row > 0 ? 1 : 0;
            // console.log('第'+rowIndex+'行','第'+i+'列','rowspan:'+_row,'colspan:'+_col)
            return {
              rowspan: _row,
              colspan: _col
            }
          }
        }
      },
      updateTableData: function () {
        this.filteredTableData = this.jsonData["data"][this.dataFilter];
        this.spanArr = [];
        this.position = 0;
        if (this.dataFilter === 'ByProject') {
          this.rowspan(0, 'genre');
          this.rowspan(1, 'group');
        } else {
          this.rowspan(0, 'genre');
          this.rowspan(1, 'group_to_genre');
        }
      }
    },
    watch: {
      jsonData(val) {
        this.updateTableData()
      },
      dataFilter(val) {
        this.updateTableData()
      },
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "四期科研 - 项目刷新概率",
  "data_group": "数据分组",
  "data_table": "数据表格",
  "genre_to_all": "类别占全部 %",
  "group_to_genre": "子类占类别 %",
  "project_to_group": "项目占子类 %",
  "genre": "类别",
  "group": "子类",
  "project": "项目",
  "alias": "别名",
  "samples": "样本数",
  "rate": "概率"
  },
  "en-US": {
  "title": "Research S4 - Project Appear Possibility",
  "data_group": "Data Grouping",
  "data_table": "Data Table",
  "genre_to_all": "% of genre to all",
  "group_to_genre": "% of sub genre to genre",
  "project_to_group": "% of project to sub genre",
  "genre": "Genre",
  "group": "Sub Genre",
  "project": "Project",
  "alias": "Alias",
  "samples": "Samples",
  "rate": "Rate"
  }
  }
</i18n>

<style scoped>

</style>
