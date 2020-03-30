<template>
  <div class="hello">
    <van-nav-bar :title="title" :left-text="lefttexts" :left-arrow='arrow'
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)

export default {
  name: 'BarSample',
  props: {
    newtitle: {
      type: String,
      default: 'hello world'
    },
    pagename: {
        type:String,
        default:''
    },
    lefttext: {
        type:String,
        default:'返回'
    },
    leftarrow: {
        type: Boolean,
        default:true
    }
  },
  data() {
      return {
          title: this.newtitle,
          //pagenames: this.pagename
          lefttexts: this.lefttext,
          arrow:this.leftarrow
      }
  },
  methods: {
    onClickLeft() {
      this.$router.push({name: this.pagename})     
    },
    onClickRight() {
      alert("success")
    }
  },
}
</script>
<style scoped>
    .hello {
        border: auto;
    }
    .van-nav-bar {
            background-color: dimgray;
    }
    .van-nav-bar__title {
        color: whitesmoke;
        font-weight: 500;
        font-size: 16px;
    }
    .van-nav-bar__text {
        color: white
    }
    .van-icon {
        color:white
    }
</style>