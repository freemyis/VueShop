<template>
  <div>
    <p>There are Third Component you can see it.</p>
    <slot name="defaultSlot" bra="brabra~~~~~~~"></slot>
  </div>
</template>

<script>
import PersonNull from "./PersonNull.js";

export default {
  name: "PersonThree",
  data() {
    return {
      obtest: "objex-tesing"
    };
  },
  methods: {
    obt() {
      console.log("===");
    }
  },
  created() {
    PersonNull.$on("brother", val => {
      console.log(val, "success get brother Message.");
    });

    this.$parent.$on("heibro", val => {
      console.log(val, "There are bro.");
    });
  }
};
</script>

<style scoped>
</style>