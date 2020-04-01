<template>
    <div>
      <BarSample :newTitle="message" :pagename='newName' :leftText="ltext" :leftArrow="lrrow"/>
      <SwipeSample />
    </div>
</template>

<script>
import BarSample from '@/components/TabBarSample/BarSample'
import SwipeSample from '@/components/SwipeSample'

export default {
  name: 'Persontr',
  components: {
    BarSample,
    SwipeSample,
  },
  data() {
    return {
      user: {
        username:'',
        password:''
      },
      message:'登录成功页面',
      newName:'HelloWorld',
      ltext:"返回",
      lrrow:true
    }
  },
  mounted () {
    console.log(this.$route.params.data);
    this.user = this.$route.params.data;
  },
}
// console.log(this.$route.params.data);
</script>
