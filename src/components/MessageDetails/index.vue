<template>
  <div>
    <BarSample :newTitle="message" :pagename="newName" :leftText="ltext" :leftArrow="lrrow" />
    <div ref="news" style="margin-top:50px;">this is test</div>
    <div class="mains">
      <ul>
        <li v-for="(item) in newdatas" :key="item.id">
          <article>{{item.title}}</article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BarSample from "@/components/TabBarSample/BarSample";

export default {
  name: "MessageDetails",
  data() {
    return {
      itemname: ""
    };
  },
  components: {
    BarSample
  },
  data() {
    return {
      message: "商品详情页面",
      newName: "/Persontr",
      ltext: "返回",
      lrrow: true,
      newdatas: []
    };
  },
  created() {
    this.$axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        this.newdatas = res.data;
      })
      .catch(err => {
        console.log("The ERR is", err);
      });
  },
  mounted() {
    this.$refs.news.innerHTML = "you can get the sample el from mounted.";
  }
};
</script>

<style scoped>
.mains {
  margin-top: 65px;
  padding: 5px 10px;
}
</style>