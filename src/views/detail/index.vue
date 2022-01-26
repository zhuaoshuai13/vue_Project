<template>
    <div class="">
      商品详情
    </div>
</template>

<script>
import { getDetails } from '@/api/details'
export default {
  name: 'Detail',
  created() {
    getDetails(this.$route.query.id)
      .then(data => console.log(data))
  },
}
</script>

<style lang="less">

</style>
