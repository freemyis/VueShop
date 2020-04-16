<template>
    <div>
      <BarSample :newTitle="message" :pagename='newName' :leftText="ltext" :leftArrow="lrrow"/>
      <!-- <SwipeSample /> -->
      <router-view></router-view>
      <BottomBar />
    </div>
</template>

<script>
import BarSample from '@/components/TabBarSample/BarSample' 
import SwipeSample from '@/components/SwipeSample'
import BottomBar from '@/components/BottomBar'

export default {
  name: 'Persontr',
  components: {
    BarSample,
    SwipeSample,
    BottomBar,
  },
  data() {
    return {
      user: {
        username:'',
        password:''
      },
      message:'登录成功页面',
      newName:'/',
      ltext:"返回",
      lrrow:true
    }
  },
  methods: {
    clickCount(data) {
      console.log(data);
    }
  },
  mounted () {
    console.log(this.$route.query.data);
    this.user = this.$route.query.data;
  },
}
// console.log(this.$route.params.data);
</script>
