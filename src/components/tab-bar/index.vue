<template>
      <ul class="tab-bar">
        <li
          is="router-link"
          tag="li"
          v-for="item of tabbar"
           :key="item.path"
           :to="item.path"
        >
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </li>
      </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'TabBar',
  computed: {
    tabbar() {
      return routes
        .filter(cur => cur.meta?.isTabBar)
        .map(({ path, meta: { title, icon } }) => ({
          path,
          title,
          icon,
        }))
    },
  },
}
</script>

<style lang="less" scoped>
  @font-face {
  font-family: 'iconfont';  /* Project id 2878959 */
  src: url('//at.alicdn.com/t/font_2878959_94wymr0tvvd.woff2?t=1634643754669') format('woff2'),
       url('//at.alicdn.com/t/font_2878959_94wymr0tvvd.woff?t=1634643754669') format('woff'),
       url('//at.alicdn.com/t/font_2878959_94wymr0tvvd.ttf?t=1634643754669') format('truetype');
}
  .iconfont{
    font-family:"iconfont" !important;
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 78px;
    border-top: 1px solid #ccc;
    i{
      display: block;
      width: 40px;
      text-align: center;
    }
    span{
      display: block;
      text-align: center;
    }
    .router-link-exact-active, .router-link-active {
    color: #d81e06;
  }
  }
</style>
