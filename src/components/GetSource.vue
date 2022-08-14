<template>
  <div class="get-source">
    <el-divider content-position="left">{{ $t("title") }}</el-divider>
    <div class="title">
      <el-link :href="dataApi(jsonFile)" icon="el-icon-view">
        {{ $t("description") }} {{ jsonFile }}
      </el-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "GetSource",
    props: ["jsonFile"],
    methods: {
      dataApi: function (url) {
        return axios.defaults.baseURL.slice(0, -1) + url
      }
    }
  }

</script>

<i18n>
  {
  "zh-CN": {
  "title": "原始数据",
  "description": "获取本页 JSON 格式原始数据:"
  },
  "en-US": {
  "title": "Source Data",
  "description": "Get the source data of current page in JSON:"
  }
  }
</i18n>

<style scoped>

</style>
