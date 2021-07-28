<template>
  <div>
    <el-divider content-position="left">{{ $t("items_group") }}</el-divider>
    <data-filter :data="jsonData.items_group"
                 :filter="itemFilter"
                 :i18n="jsonData.i18n"
                 @setFilter="setItemFilter"
    ></data-filter>

    <el-divider content-position="left">{{ $t("data_group") }}</el-divider>
    <data-filter :data="jsonData.data_group"
                 :filter="dataFilter"
                 :i18n="jsonData.i18n"
                 @setFilter="setDataFilter"
    ></data-filter>

    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <div class="table-title">
      <h2>{{ tableName }}</h2>
      <div>{{ tableInfo }}</div>
    </div>
    <el-table
      :data="filteredTableData"
      stripe
      style="width: 100%"
      :cell-style="{padding: '5px'}"
      :header-cell-style="{'text-align': 'center'}"
      :default-sort="defaultSort"
      @sort-change="setSort"
    >
      <el-table-column sortable prop="project" :label="$t('project')" width="120"></el-table-column>
      <el-table-column sortable prop="samples" :label="$t('samples')"></el-table-column>
      <el-table-column :label="$t('drop')">
        <el-table-column prop="drop_min" :label="$t('drop_min')" width="50"></el-table-column>
        <el-table-column prop="drop_max" :label="$t('drop_max')" width="50"></el-table-column>
        <el-table-column prop="drop_rate" :label="$t('drop_rate')" width="70"></el-table-column>
        <el-table-column prop="drop_avg" :label="$t('drop_avg')" width="70"></el-table-column>
      </el-table-column>
      <el-table-column :label="$t('bonus')">
        <el-table-column prop="bonus_min" :label="$t('bonus_min')" width="50"></el-table-column>
        <el-table-column prop="bonus_max" :label="$t('bonus_max')" width="50"></el-table-column>
        <el-table-column prop="bonus_rate" :label="$t('bonus_rate')" width="70"></el-table-column>
        <el-table-column prop="bonus_avg" :label="$t('bonus_avg')" width="70"></el-table-column>
      </el-table-column>
      <el-table-column :label="$t('total')">
        <el-table-column sortable prop="average" :label="$t('average')"></el-table-column>
        <el-table-column sortable prop="hourly" :label="$t('hourly')"></el-table-column>
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
    name: "ResearchTable",
    props: {
      "jsonFile": {required: true},
      "defaultItem": {},
      "defaultData": {},
      "tableName": {default: "Drop Statistics"}
    },
    components: {DataFilter, GetSource},
    data() {
      return {
        defaultSort: {prop: 'hourly', order: 'descending'},
        currentSort: {prop: 'hourly', order: 'descending'},
        jsonData: {},
        itemFilter: "",
        dataFilter: ""
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;
        this.itemFilter = this.defaultItem;
        this.dataFilter = this.defaultData;
        this.$i18n.mergeLocaleMessage('zh-CN', res.i18n["zh-CN"]);
        this.$i18n.mergeLocaleMessage('en-US', res.i18n["en-US"])
      })
    },
    methods: {
      setItemFilter: function (filter) {
        this.itemFilter = filter
      },
      setDataFilter: function (filter) {
        this.dataFilter = filter
      },
      setSort: function (sort) {
        this.currentSort = sort
      }
    },
    computed: {
      filteredTableData: function () {
        if (this.jsonData["data"] !== undefined && this.jsonData["data"][this.dataFilter] !== undefined) {
          return this.jsonData["data"][this.dataFilter].filter(value => value.item === this.itemFilter);
        }
      },
      tableInfo: function () {
        return this.$t(
          'grouping', [
            this.$t(this.itemFilter), this.$t(this.dataFilter), this.$t(this.currentSort.prop), this.$t(this.currentSort.order)
          ]
        )
      }
    },
  }
</script>

<i18n>
  {
  "zh-CN": {
  "items_group": "物品掉落",
  "data_group": "项目分组",
  "data_table": "数据表格",
  "grouping": "\"{0}\" 掉落统计 | {1}分组科研项目 | 按{2}{3}排列",
  "project": "项目",
  "samples": "样本数",
  "drop": "掉落",
  "bonus": "BONUS",
  "total": "总计",
  "drop_rate": "概率",
  "drop_min": "最小",
  "drop_max": "最大",
  "drop_avg": "平均",
  "bonus_rate": "概率",
  "bonus_min": "最小",
  "bonus_max": "最大",
  "bonus_avg": "平均",
  "average": "单次",
  "hourly": "每小时",
  "ascending": "升序",
  "descending": "降序"
  },
  "en-US": {
  "items_group": "Items Drops",
  "data_group": "Project Grouping",
  "grouping": "Drop statistics of \"{0}\" | Projects Grouped {1} | Order By {2} {3}",
  "data_table": "Data Table",
  "project": "Project",
  "samples": "Samples",
  "drop": "Drop",
  "bonus": "Bonus",
  "total": "Total",
  "drop_rate": "rate",
  "drop_min": "min",
  "drop_max": "max",
  "drop_avg": "avg",
  "bonus_rate": "rate",
  "bonus_min": "min",
  "bonus_max": "max",
  "bonus_avg": "avg",
  "average": "Each",
  "hourly": "Hourly",
  "ascending": "Ascending",
  "descending": "Descending"
  }
  }
</i18n>

<style scoped>
  /deep/ .el-table .cell {
    padding-left: 5px;
    padding-right: 5px;
  }

  /deep/ .el-table .ascending .sort-caret.ascending {
    border-bottom-color: #4e4c97;
  }

  /deep/ .el-table .descending .sort-caret.descending {
    border-top-color: #4e4c97;
  }

  .table-title {
    color: #ececf0;
    background-color: #4e4c97;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
  }

  h2 {
    margin: 0.75rem;
    font-size: 30px
  }
</style>
