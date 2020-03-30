<template>
  <div class="newpos">
    <BarSample :newtitle="message" :lefttext="ltext" :leftarrow="lrrow" />
    <CenterPage  />
  </div>
</template>

<script>
import BarSample from '@/components/TabBarSample/BarSample'
import CenterPage from '@/components/CenterPage'

export default {
  name: 'HelloWorld',
  components: {
    BarSample,
    CenterPage,
  },
  data() {
    return {
      message: '用户登录页面',
      ltext:'',
      lrrow:false
    }
  },
}
</script>

<style scoped>
  .newpos {
    background-image: url("https://tse4-mm.cn.bing.net/th/id/OIP.4GJ7Mx1lmDgEytE_WTEeYQAAAA?w=126&h=212&c=7&o=5&pid=1.7");
    background-repeat: no-repeat;
    background-size: cover;
    height: 45em;
  }
</style>
