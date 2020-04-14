<template>
  <div class="newpos">
    <div class="stars"></div>
    <BarSample :newTitle="message" :leftText="ltext" :leftArrow="lrrow" />
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
    background-image: url("https://sjbz-fd.zol-img.com.cn/t_s208x312c5/g2/M00/01/0C/ChMlWV6BZxqIOzMlAAhSjpEmi5EAAN8VALttjwACFKm996.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 45em;
  }
</style>
