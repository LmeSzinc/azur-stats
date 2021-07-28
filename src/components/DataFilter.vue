<template>
  <el-tabs v-model="tab" tab-position="left">
    <el-tab-pane
      :label="$t(tabName)"
      :name="tabIndex.toString()"
      v-for="(tabData, tabName, tabIndex) in data"
      :key="tabName"
    >
      <el-card
        :class="{'filter': true, 'is-active': filterData.name === filter}"
        shadow="hover"
        v-for="filterData in tabData"
        :key="filterData.name"
      >
        <div class="option" @click="setFilter(filterData.name)">
          <img class="option-inner" :src="'/static' + filterData.image" alt="" width="32px" height="32px">
          <el-divider class="option-inner" direction="vertical"></el-divider>
          <span class="option-inner option-name">{{ $t(filterData.name) }}</span>
        </div>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: "DataFilter",
    props: ["data", "filter", "i18n"],
    data() {
      return {
        tab: "0",
      }
    },
    watch: {
      i18n(val) {
        this.$i18n.mergeLocaleMessage('zh-CN', val["zh-CN"]);
        this.$i18n.mergeLocaleMessage('en-US', val["en-US"])
      }
    },
    methods: {
      setFilter: function (filter) {
        this.$emit('setFilter', filter);
      }
    },
    computed: {},
  }
</script>

<style scoped>
  /deep/ .el-card__body {
    padding: 0;
    font-size: 14px;
  }

  /deep/ .el-card.is-hover-shadow:hover {
    color: #757de8;
  }

  /deep/ .el-tabs__header {
    width: 135px
  }

  /deep/ .el-tabs__active-bar {
    background-color: #757de8;
  }

  /deep/ .el-tabs__item.is-active {
    color: #757de8;
    font-weight: 700;
  }

  /deep/ .el-tabs__item:hover {
    color: #757de8;
  }

  .filter {
    margin: 0 5px 10px 5px;
    height: 40px;
    width: 225px;
    float: left;
    box-sizing: border-box;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .el-card.is-hover-shadow.is-active {
    box-sizing: border-box;
    border-color: #757de8;
    border-width: 2px;
    color: #757de8;
    font-weight: 700;

  }

  .option {
    display: flex;
    height: 40px;
    width: 215px;
    padding-left: 5px;
  }

  .option-name {
    width: 160px;
  }

  .option-inner {
    margin: auto;
  }
</style>
