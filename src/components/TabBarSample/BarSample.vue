<template>
  <div class="hello">
    <van-nav-bar 
    :title="title" 
    :left-text="lefttexts" 
    :left-arrow='arrow'
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
    newTitle: {
      type: String,
      default: 'hello world'
    },
    pagename: {
        type:String,
        default:''
    },
    leftText: {
        type:String,
        default:'返回'
    },
    leftArrow: {
        type: Boolean,
        default:true
    }
  },
  data() {
      return {
          title: this.newTitle,
          //pagenames: this.pagename
          lefttexts: this.leftText,
          arrow:this.leftArrow
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
<style>
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
      color: white
    }
    .van-nav-bar .van-icon {
      color:white
    }
</style>