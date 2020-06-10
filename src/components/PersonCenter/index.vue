<template>
  <div>
    <div class="topNull"></div>
    <h1>PersonCenter page</h1>
    <PersonOne :age="age1" locate="qingdao" @emitMess="Messget" @ringmis="getTwoMess" />
    <div>
      <title>Active Route Ts</title>
      <router-link :to="{path: '/PersonalStore/1', query:{name:'newNames'}}">个人简介</router-link>---
      <router-link :to="{path: '/PersonalStore/2'}">个人证书</router-link>---
      <router-link :to="{path: '/PersonalStore/3'}">个人特色</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PersonOne from "./PersonOne";

export default {
  name: "PersonCenter",
  data() {
    return {
      age1: 12
    };
  },
  methods: {
    Messget(val) {
      console.log(val);
    },
    getTwoMess(val) {
      console.log(val, "The Two Method");
    }
  },
  //   watch: {
  //     $route(to, from) {
  //       console.log("you can from ", from, "to component:", to);
  //     }
  //   },
  beforeRouteUpdate(to, from, next) {
    //console.log(from, to);
    next();
  },
  components: {
    PersonOne
  }
};
</script>

<style scoped>
.topNull {
  height: 46px;
}
</style>