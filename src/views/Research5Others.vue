<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <research-table :json-file="jsonFile"
                    :json-preset="jsonPreset"
                    :table-name="$t('title')"
    ></research-table>
  </div>
</template>

<script>
  import ResearchTable from "../components/ResearchTable"

  export default {
    name: "Research5Equipments",
    components: {ResearchTable},
    data() {
      return {
        jsonFile: "/ResearchS5/others.json",
        jsonPreset: "/ResearchS5",
      }
    }
  }
</script>

<i18n>
  {
  "zh-CN": {
  "title": "五期科研 - 其他物品掉落"
  },
  "en-US": {
  "title": "Research S5 - Other Items Drops"
  }
  }
</i18n>

<style scoped>

</style>
