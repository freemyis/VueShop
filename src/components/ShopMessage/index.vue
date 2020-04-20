<template>
  <div>
    <div class="topNull"></div>
    <p>basic page in Shop.</p>
    <ul v-for="item in itemMessage" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
    <button class="defaultbtn" @click="getID">获取商品ID</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "ShopMessage",
  data() {
    return {
      newarray: []
    };
  },
  methods: {
    getID() {
      console.log((this.newarray = this.$store.state.foods.shopItem));
    }
  },
  computed: {
    itemMessage() {
      this.newarray = this.$store.state.foods.shopItem;
      return this.$store.getters["foods/filterItem"];
    }
  }
};
</script>

<style scoped>
.topNull {
  height: 46px;
}

.defaultbtn {
  padding: 2px 6px;
  border: 0 solid #ccc;
  background-color: #ccc;
  color: white;
}
</style>