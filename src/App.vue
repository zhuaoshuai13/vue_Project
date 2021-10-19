<template>
  <div id="app">
    app
    <router-view />
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from '@/components/tab-bar'
export default {
  components: {
    TabBar,
  },
}
</script>
<style lang="less">

</style>
