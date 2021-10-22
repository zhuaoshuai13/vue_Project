<template>
    <div class="search-bar">
      <van-search  placeholder="搜索商品，发现更多优选" />
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style lang="less" scoped>
  /deep/.van-search__content van-search__content--square{
    background-color: #eee !important;
  }
</style>
