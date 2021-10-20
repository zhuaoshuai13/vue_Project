<template>
    <div class="nav-bar">
      <div class="back" @click="$router.back()">&lt; 返回</div>
      <div class="title">{{this.$route.meta.title}}</div>
      <div class="more">更多</div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="less">
  .nav-bar{
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    .back{
      width: 50px;
    }
    .til{
      flex:1;
    }
    .more{
      width: 40px;
    }
  }
</style>
