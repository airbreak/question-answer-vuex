<!--Created by jiangjianming@bmkp.cn on 2018/4/26.-->
<!--这个是一个注释-->
<template>
  <div class="wrapper-box">
    <itemcontainer component="item"></itemcontainer>
  </div>
</template>
<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'index',
  components: {
    itemcontainer
  },
  created () {
    this.$store.commit('REMEMBER_TIME')
  }
}
</script>

<style lang="less" scoped>

</style>
