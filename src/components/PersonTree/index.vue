<template>
  <div>
    <BarSample :newTitle="message" :pagename="newName" :leftText="ltext" :leftArrow="lrrow" />
    <!-- <SwipeSample /> -->
    <main>
      <router-view></router-view>
      {{leaveName}}
    </main>
    <BottomBar />
  </div>
</template>

<script>
import BarSample from "@/components/TabBarSample/BarSample";
import SwipeSample from "@/components/SwipeSample";
import BottomBar from "@/components/BottomBar";

export default {
  name: "Persontr",
  components: {
    BarSample,
    SwipeSample,
    BottomBar
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, "beforeRouteEnter.");
    next(vm => {
      vm.leaveName = to.name + " Bottom";
    });
  },
  beforeRouteLeave(to, from, next) {
    console.log("from", from, "to", to, "success");
    next();
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      message: "登录成功页面",
      newName: "/",
      ltext: "返回",
      lrrow: true,
      leaveName: ""
    };
  },
  methods: {
    clickCount(data) {
      console.log(data);
    }
  },
  mounted() {
    console.log(this.$route.query.data);
    this.user = this.$route.query.data;
  }
};
// console.log(this.$route.params.data);
</script>

<style scoped>
main {
  margin-bottom: 50px;
}
</style>
