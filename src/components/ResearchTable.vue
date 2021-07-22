<template>
  <div>
    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <el-table
      :data="filteredTableData"
      stripe
      style="width: 100%"
      :cell-style="{padding: '5px'}"
      :header-cell-style="{'text-align': 'center'}"
      :default-sort="defaultSort"
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
  </div>
</template>

<script>
  export default {
    name: "ResearchTable",
    props: ["jsonData", "itemFilter", "projectFilter"],
    data() {
      return {
        defaultSort: {prop: 'hourly', order: 'descending'}
      }
    },
    computed: {
      filteredTableData: function () {
        if (this.jsonData[this.projectFilter] !== undefined) {
          return this.jsonData[this.projectFilter].filter(value => value.item === this.itemFilter);
        }
      }
    },
  }
</script>

<i18n>
  {
  "zh-CN": {
  "data_table": "数据表格",
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
  "hourly": "每小时"
  },
  "en-US": {
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
  "hourly": "Hourly"
  }
  }
</i18n>

<style scoped>
  /deep/ .el-table .cell {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
