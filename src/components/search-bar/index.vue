<template>
    <div class="search-bar">
      <div>&lt;返回</div>
      <input type="text" placeholder="海狗丸">
    </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'SearchBar',
  created() {
    this.mes = routes[0].mess.test
  },
}
</script>

<style lang="less" scoped>
  .search-bar{
    display: flex;
    div{
      width: 80px;
    }
    input{
      width: 200px;
    }
  }
</style>
