<template>
  <div class="movePic">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-card
      num="1"
      price="2000"
      desc="描述信息"
      title="商品标题"
      v-for="(phoneImage, index) in images"
      :key="index"
      :thumb="phoneImage"
      @click-thumb="shopDetail(index)"
    >
      <!-- @click="shopDetail(index)" -->
      <template #tags>
        <van-tag plain type="danger">京东自营</van-tag>
        <van-tag plain type="danger">双十一特购</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="addShopCar(index)">加入购物车</van-button>
        <van-button size="mini">购买</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import { mapMutations, mapActions, mapGetters } from "vuex";
// import CenterNull from '../CenterNull'
import { Swipe, SwipeItem, Lazyload, Card, Tag, Button } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Card)
  .use(Tag)
  .use(Button);

export default {
  name: "SwipeSample",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      shopImage: [
        "https://img.yzcdn.cn/vant/ipad.jpeg",
        "https://img.yzcdn.cn/vant/ipad.jpeg",
        "https://img.yzcdn.cn/vant/ipad.jpeg",
        "https://img.yzcdn.cn/vant/ipad.jpeg",
        "https://img.yzcdn.cn/vant/ipad.jpeg",
        "https://img.yzcdn.cn/vant/ipad.jpeg"
      ],
      countNum: 1
    };
  },
  methods: {
    shopDetail(index) {
      this.$router.push("/MessageDetails");
      console.log(this.$store.state.foods.count);
      console.log(this.$store.getters["foods/getTodoByid"](index));
    },
    // addShopCar() {
    //     let data = this.countNum++;
    //     // CenterNull.$emit('showNum', data)
    //     /***** */
    //     //正常的使用commit调用crement
    //     // this.$store.commit('crement');
    // }
    /*************** */
    //使用...mapMutations
    // ...mapMutations({
    //     addShopCar: 'crement'
    // })
    /********************* */
    //使用...mapActions
    addShopCar(index) {
      console.log(this.$store.dispatch("foods/increments"));
      this.$store.commit("foods/addShopItem", index);
      console.log(this.$store.state.foods.shopItem);
      //   this.$store.dispatch("increments");
    }
    // ...mapActions("foods", {
    //   addShopCar: "increments"
    // })
  }
};
</script>

<style scoped>
van-card {
}

img {
  width: 100%;
  height: 18em;
  margin-top: 4em;
}
.movePic {
  width: 100%;
  /* height: 100vh; */
}
</style>