<template>
  <div>
    <h1 class="title">{{ $t("title") }}</h1>
    <shop-table :json-file="jsonFile"
                :json-preset="jsonPreset"
                :table-name="$t('title')"
    ></shop-table>
  </div>
</template>

<script>
  import ShopTable from "../components/ShopTable";

  export default {
    name: "ShopItems",
    components: {ShopTable},
    data() {
      return {
        jsonFile: "/Shop/shop.json",
        jsonPreset: "/Shop",
      };
    }
  };
</script>

<i18n>
  {
  "zh-CN": {
  "title": "商店物品"
  },
  "en-US": {
  "title": "Shop Items"
  }
  }
</i18n>

<style scoped>

</style>
