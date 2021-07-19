<template>
  <div class="language">
    <span>Language:</span>
    <el-select class="language-selection" v-model="locale" placeholder="Select Language" value="">
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
        locale: "zh-CN"
      }
    },
    methods: {
      setLocale: function (locale) {
        console.log(locale);
        localStorage.setItem('locale', locale);
        this.$i18n.locale = locale;
      },
      getLocale: function () {
        var locale = localStorage.getItem('locale');
        if (!locale) {
          locale = (navigator.language || navigator.userLanguage);
        }
        return locale
      }
    },
    mounted() {
      var locale = this.getLocale();
      if (locale === "en-US" || locale === "zh-CN") {
        this.locale = locale
      } else {
        this.locale = "en-US"
      }
    },
    watch: {
      locale(val) {
        this.setLocale(val)
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
