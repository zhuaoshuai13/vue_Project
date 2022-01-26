<template>
    <div class="category">
      <div class="left">
        <div v-for="item in list" :key="item.id">
          {{item.name}}
        </div>
      </div>
      <div class="right"></div>
    </div>
</template>

<script>
import { getTab } from '@/api/home'
export default {
  name: 'Category',
  data() {
    return {
      list: [],
    }
  },
  created() {
    getTab()
      .then(data => {
        this.list = data.list.slice(1)
      })
  },
}
</script>

<style lang="less" scoped>
  .category{
    display: flex;
    height: 100%;
    width: 100%;
    .left{
      width: 80px;
      height: 100%;
      display: flex;
      flex-direction: column;
      div{
        margin-top: 15px;
        text-align: center;
      }
    }
    .right{
      flex: 1;
      height: 100%;
    }
  }
</style>
