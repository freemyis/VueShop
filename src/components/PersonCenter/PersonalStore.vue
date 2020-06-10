<template>
  <div>
    <title>This is a PersonalStore</title>

    <main>we can see that:{{messages}}</main>
  </div>
</template>

<script>
export default {
  name: "PersonalStore",
  data() {
    return {
      messages: "defaultVue"
    };
  },
  created() {
    this.messages = this.$route.params.id;
  },
  //   watch: {
  //     $route(newValue, oldValue) {
  //       this.messages = newValue.params.id;
  //     }
  //   },
  beforeRouteUpdate(to, from, next) {
    this.messages = to.params.id;
    next();
  }
};
</script>

<style scoped>
</style>