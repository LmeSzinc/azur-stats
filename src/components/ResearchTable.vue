<template>
  <div>
    <el-divider content-position="left">{{ $t("items_group") }}</el-divider>
    <data-filter :data="tableData.item_filter"
                 :filter="itemFilter"
                 :i18n="tableData.i18n"
                 @setFilter="setItemFilter"
    ></data-filter>

    <el-divider content-position="left">{{ $t("data_group") }}</el-divider>
    <data-filter :data="tableData.grouping_filter"
                 :filter="groupingFilter"
                 :i18n="tableData.i18n"
                 @setFilter="setGroupingFilter"
    ></data-filter>

    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <el-table
      :data="dropData"
      stripe
      style="width: 100%"
      :cell-style="{padding: '5px'}"
      :header-cell-style="{'text-align': 'center'}"
      :default-sort="defaultSort"
    >
      <el-table-column prop="name" :label="$t('project')" width="180">
        <template slot-scope="scope">{{ $t(scope.row.project) }}</template>
      </el-table-column>
      <el-table-column sortable prop="project" :label="$t('alias')"></el-table-column>
      <el-table-column prop="samples" :label="$t('samples')"></el-table-column>
      <el-table-column :label="$t('drop')">
        <el-table-column prop="drop_range" :label="$t('drop_range')"></el-table-column>
        <el-table-column prop="drop_avg" :label="$t('drop_avg')"></el-table-column>
      </el-table-column>
      <el-table-column :label="$t('bonus')">
        <el-table-column prop="bonus_range" :label="$t('bonus_range')"></el-table-column>
        <el-table-column prop="bonus_avg" :label="$t('bonus_avg')"></el-table-column>
      </el-table-column>
      <el-table-column :label="$t('total')">
        <el-table-column sortable prop="average" :label="$t('average')"></el-table-column>
        <el-table-column sortable prop="hourly" :label="$t('hourly')"></el-table-column>
      </el-table-column>
    </el-table>
    <get-source :json-file=tableDataFile></get-source>
  </div>
</template>

<script>
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"
  import DataFilter from "../components/DataFilter"

  export default {
    name: "ResearchTable",
    props: {
      "jsonFile": {required: true},
      "jsonPreset": {required: true},
      "tableName": {default: "Drop Statistics"}
    },
    components: {DataFilter, GetSource},
    data() {
      return {
        defaultSort: {prop: 'hourly', order: 'descending'},
        tableData: {},
        dropData: [],
        itemFilter: "",
        groupingFilter: ""
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.tableData = res;
        this.itemFilter = res['item_filter_default'];
        this.groupingFilter = res['grouping_filter_default'];
        this.$i18n.mergeLocaleMessage('zh-CN', res.i18n["zh-CN"]);
        this.$i18n.mergeLocaleMessage('en-US', res.i18n["en-US"]);
        this.updateTable()
      })
    },
    methods: {
      setItemFilter: function (filter) {
        this.itemFilter = filter;
        this.updateTable()
      },
      setGroupingFilter: function (filter) {
        this.groupingFilter = filter;
        this.updateTable()
      },
      updateTable: function () {
        get(this.tableDataFile).then(res => {
          this.dropData = res
        })
      }
    },
    computed: {
      tableDataFile: function () {
        return `${this.jsonPreset}/${this.groupingFilter}/${this.itemFilter}.json`;
      }
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "items_group": "物品掉落",
  "data_group": "项目分组",
  "data_table": "数据表格",
  "project": "项目",
  "alias": "别名",
  "samples": "样本数",
  "drop": "掉落",
  "bonus": "BONUS",
  "total": "总计",
  "drop_range": "数量",
  "drop_avg": "平均",
  "bonus_range": "数量",
  "bonus_avg": "平均",
  "average": "单次",
  "hourly": "每小时"
  },
  "en-US": {
  "items_group": "Items Drops",
  "data_group": "Project Grouping",
  "data_table": "Data Table",
  "project": "Project",
  "alias": "Alias",
  "samples": "Samples",
  "drop": "Drop",
  "bonus": "Bonus",
  "total": "Total",
  "drop_range": "Amount",
  "drop_avg": "Average",
  "bonus_range": "Amount",
  "bonus_avg": "Average",
  "average": "Each",
  "hourly": "Hourly"
  }
  }
</i18n>

<style scoped>
  /deep/ .el-table .cell {
    padding-left: 5px;
    padding-right: 5px;
  }

  /deep/ .el-table--border th:first-child .cell {
    padding-left: 5px;
    padding-right: 5px;
  }

  /deep/ .el-table .ascending .sort-caret.ascending {
    border-bottom-color: #757de8;
  }

  /deep/ .el-table .descending .sort-caret.descending {
    border-top-color: #757de8;
  }
</style>
