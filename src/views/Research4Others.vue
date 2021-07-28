<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <research-table :json-file="jsonFile"
                    :default-item="itemFilter"
                    :default-data="dataFilter"
                    :table-name="$t('title')"
    ></research-table>
  </div>
</template>

<script>
  import {get} from "../request/http";
  import GetSource from "../components/GetSource"
  import ResearchTable from "../components/ResearchTable"

  export default {
    name: "Research4Others",
    components: {ResearchTable, GetSource},
    data() {
      return {
        jsonData: {},
        jsonFile: "research4_others.json",
        itemFilter: "CognitiveChips",
        dataFilter: "ByGenreduration",
      }
    },
    mounted() {
      get(this.jsonFile).then(res => {
        this.jsonData = res;
      })
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "四期科研 - 其他物品掉落"
  },
  "en-US": {
  "title": "Research S4 - Other Items Drops"
  }
  }
</i18n>

<style scoped>

</style>
