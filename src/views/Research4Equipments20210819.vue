<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <p class="description" v-html="$t('description')"></p>
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
    name: "Research4Equipments",
    components: {ResearchTable, GetSource},
    data() {
      return {
        jsonData: {},
        jsonFile: "research4_equipments_20210819.json",
        itemFilter: "EquipmentUltrarare",
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
  "title": "四期科研 - 装备设计图掉落 (2021-08-19 维护前)",
  "description": "2021-08-19 的港区维护后，碧蓝航线增加了 Q 类科研项目的收益。<br>这里是 2021-08-19 09:00 (UTC+8) 前的 Q 类科研装备设计图掉落统计的备份。<br>其他页面中的 Q 类科研项目则来自 2021-08-20 09:00 (UTC+8) 后的上传。<br>2021-08-19 09:00 (UTC+8) 至 2021-08-20 09:00 (UTC+8) 期间的 Q 类科研项目因不可区分被标记为无效。"
  },
  "en-US": {
  "title": "Research S4 - Equipment Designs Drops (Before 2021-08-19 Maintenance)",
  "description": "After the maintenance in 2021-08-19, Azur Lane has increased the reward from Q-type research projects.<br>Here's a backup of the drop statistics of the Q-type research in equipment designs before 2021-08-19 09:00 (UTC+8).<br>Q-type research in other pages come from the uploads after 2021-08-20 09:00 (UTC+8)<br>Q-type research during the period from 2021-08-19 09:00 (UTC+8) to 2021-08-20 09:00 (UTC+8) were marked as invalid because they are indistinguishable."
  }
  }
</i18n>

<style scoped>

</style>
