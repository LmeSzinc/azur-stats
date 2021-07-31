<template>
  <div>
    <api-doc class="markdown-body"></api-doc>
  </div>
</template>

<script>
  import 'github-markdown-css'
  import ApiDoc from '../components/Api.md'

  export default {
    name: "Api",
    components: {ApiDoc},
  }
</script>

<style scoped>

</style>
