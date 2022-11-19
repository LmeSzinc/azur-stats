<template>
  <div>
    <el-divider content-position="left">{{ $t("items_group") }}</el-divider>
    <data-filter :data="tableData.item_filter"
                 :filter="itemFilter"
                 :i18n="tableData.i18n"
                 @setFilter="setItemFilter"
    ></data-filter>

    <el-divider content-position="left">{{ $t("data_table") }}</el-divider>
    <el-table
      :data="dropData"
      stripe
      style="width: 100%"
      :cell-style="{padding: '5px'}"
      :header-cell-style="{'text-align': 'center'}"
    >
      <el-table-column prop="server" :label="$t('server')" width="200" align="center"></el-table-column>

      <el-table-column :label="$t('items')">
        <el-table-column
          prop="items"
          align="center"
          :label="`${$t('update_time')}${updateTime}`"
        ></el-table-column>
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
    name: "ShopTable",
    props: {
      "jsonFile": {required: true},
      "jsonPreset": {required: true},
      "tableName": {default: "Drop Statistics"}
    },
    components: {DataFilter, GetSource},
    data() {
      return {
        tableData: {},
        dropData: [],
        itemFilter: "",
        updateTime: ""
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.tableData = res;
        this.itemFilter = res['item_filter_default'];
        this.updateTime = res['update_time'];
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
      updateTable: function () {
        get(this.tableDataFile).then(res => {
          this.dropData = res
        })
      }
    },
    computed: {
      tableDataFile: function () {
        return `${this.jsonPreset}/${this.itemFilter}.json`;
      }
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "items_group": "商店",
  "data_table": "数据表格",
  "update_time": "更新时间：",
  "server": "服务器",
  "items": "物品列表"
  },
  "en-US": {
  "items_group": "Shops",
  "data_table": "Data Table",
  "update_time": "Update Time: ",
  "server": "Server",
  "items": "Item List"
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
