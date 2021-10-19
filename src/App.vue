<template>
  <div id="app">
    <router-view />
    <tab-bar :tabbar="tabbar"/>
  </div>
</template>
<script>
import TabBar from '@/components/tab-bar'
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      tabbar: [{
        title: '首页',
        icon: '&#xe601;',
        path: '/home',
      }, {
        title: '消息',
        icon: '&#xe610;',
        path: '/category',
      }, {
        title: '购物车',
        icon: '&#xe603;',
        path: '/cart',
      }, {
        title: '我的',
        icon: '&#xe604;',
        path: '/mine',
      }],
    }
  },
}
</script>
<style lang="less">
  body{
    height: 667px;
  }
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
    div{
      flex: 1;
    }
  }
</style>
