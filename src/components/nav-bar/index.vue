<template>
    <div class="nav-bar">
      <div class="back" @click="$router.back()">&lt; 返回</div>
      <div class="title">{{this.$route.meta.title}}</div>
      <van-popover
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        placement="bottom-end"
        @select="jump"
      >
      <template #reference>
      <van-icon name="ellipsis" />
  </template>
</van-popover>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showPopover: false,
      actions: [
        {
          text: '首页',
          path: '/home',
        },
        {
          text: '购物车',
          path: '/cart',
        },
        {
          text: '我的',
          path: '/mine',
        }],
    }
  },
  methods: {
    jump(actions) {
      this.$router.push(actions.path)
    },
  },
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
