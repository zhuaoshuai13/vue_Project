<template>
    <div class="">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="banner in banners" :key="banner.id">
            <img v-lazy="banner.imageUrl" />
        </van-swipe-item>
     </van-swipe>
    </div>
</template>

<script>
import { getBanners } from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
    }
  },
  created() {
    getBanners()
      .then((data) => {
        console.log(data)
        this.banners = data
      })
  },
}
</script>

<style lang="less" scoped>
  div{
    width: 100%;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
