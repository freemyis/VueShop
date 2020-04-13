<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field
                id="newfied"
                v-model="username"
                name="username"
                label="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
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
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Form, Button, Field, NumberKeyboard, Toast } from 'vant'

    Vue.use(Form).use(Button).use(Field).use(NumberKeyboard).use(Toast)

    export default {
        name:'CenterPage',
        data() {
            return {
                username: '',
                password: '',
                show: false
            };
        },
        methods: {
            onSubmit(values) {
                //console.log('submit', values);
                this.$router.push({name: 'Persontr', params: {data: values}})                             
            },

            onInput(value) {
                Toast(value);
            },
            onDelete() {
                Toast('删除');
            }

        },
    }
</script>

<style scoped>
    form {
        margin-top: 12em;
        /* background-color: rgb(255,250,250, 0.75); */
        color: #ff6034;
        caret-color:red;
    }
    .van-cell {
        background-color: rgb(255,250,250, 0.35);
        color: #ff6034;
        font-size: 16px;
        font-weight: bolder;
        cursor: pointer;
    }
</style>