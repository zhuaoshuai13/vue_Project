<template>
      <ul class="tab-bar">
        <li v-for="n in 4" :key="n">
          <i>图标</i>
          <span>文本</span>
        </li>
      </ul>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style lang="less" scoped>
  ul{
    display: flex;
  }
</style>
