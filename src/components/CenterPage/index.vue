<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        id="newfied"
        v-model="username"
        :value="username"
        name="username"
        label="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        :value="password"
        v-model="password"
        type="password"
        name="password"
        label="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        @touchstart.stop="show = true"
      />
      <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        v-model="password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Button, Field, NumberKeyboard, Toast } from "vant";

Vue.use(Form)
  .use(Button)
  .use(Field)
  .use(NumberKeyboard)
  .use(Toast);

export default {
  name: "CenterPage",
  data() {
    return {
      username: "",
      password: "",
      show: false,
      defaultname: "crishari",
      defaultpass: "123456"
    };
  },
  methods: {
    onSubmit(values) {
      //console.log('submit', values);
      // if (this.username === this.defaultname && this.password === this.defaultpass) {

      //     this.$router.push({path: '/Persontr', query: {data: values}})
      // } else {
      //     Toast("请检查账号密码，重新输入...");
      // }
      this.$router.push({ path: "/Persontr", query: { data: values } });
    },

    onInput(value) {
      this.password = value;
    },
    onDelete() {
      // Toast('删除');
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 12em;
  /* background-color: rgb(255,250,250, 0.75); */
  /* color: #efefef; */
  caret-color: black;
}
.van-cell {
  background-color: rgb(255, 250, 250, 0.55);
  color: #efefef;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
}
input.van-field__control {
  /* color: ghostwhite !important; */
}
.van-button--info {
  background-color: #ad83d1;
  border: 1px solid #ad83d1;
}
</style>