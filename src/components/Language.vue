<template>
  <div class="language">
    <span>Language:</span>
    <el-select class="language-selection" v-model="lang" placeholder="Select Language" value="">
      <el-option key="zh-CN" label="简体中文" value="zh-CN"></el-option>
      <el-option key="en-US" label="English" value="en-US"></el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "Language",
    data() {
      return {
        lang: "zh-CN"
      }
    },
    watch: {
      lang(val) {
        this.$i18n.locale = val
      }
    }
  }
</script>

<style scoped>
  .language {
    float: right;
  }
  .language-selection {
    width: 120px;
  }

  /deep/ .el-input__inner {
    border: 0;
  }

</style>
