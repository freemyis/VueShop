<template>
  <div>
    Name:
    <input type="text" v-model="name1" />
    {{name1}}
    <div>single trans</div>
    <PersonTwo :know="rst" v-bind="$attrs" v-on="$listeners" />
    <PersonThree ref="objectMess">
      <template #defaultSlot="slotProps">
        <div>具名插槽{{slotProps.bra}}</div>
        <div>{{Mess}}</div>
      </template>
    </PersonThree>
    <slot></slot>
  </div>
</template>

<script>
import PersonTwo from "./PersonTwo";
import PersonThree from "./PersonThree";
export default {
  name: "PersonOne",
  props: {
    locate: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name1: "123",
      Mess: "you can goto parents.",
      rst: "kkkkkk"
    };
  },
  components: {
    PersonTwo,
    PersonThree
  },
  created() {
    this.name1 = this.locate;
    this.$emit("emitMess", this.Mess);
    this.$parent.$emit("parmethod", "parmethod");
  },
  mounted() {
    console.log(this.$refs, "get the components Object.");
  }
};
</script>

<style scoped>
</style>