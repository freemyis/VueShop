<template>
  <div>
    <div>{{message}}</div>
    <button @click="trans">trans</button>
  </div>
</template>

<script>
import PersonNull from "./PersonNull.js";

export default {
  name: "PersonTwo",
  data() {
    return {
      message: "default value"
    };
  },
  methods: {
    testme() {
      console.log("you can see me?");
    },
    trans() {
      PersonNull.$emit("brother", "newdatas from brother.");
    }
  },
  created() {
    console.log(this.$attrs.age, "There are PersonTwo Component");
    console.log(this.$attrs);
    this.$emit("ringmis", "you can catch me?");
  }
};
</script>

<style scoped>
</style>