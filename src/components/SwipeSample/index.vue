<template>
    <div class="movePic">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" style="width:100%;height:100%" />
            </van-swipe-item>
        </van-swipe>

        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            v-for="(phoneImage, index) in images"
            :key="index"
            :thumb="phoneImage"
            @click="shopDetail"
            >
            <template #tags>
                <van-tag plain type="danger">京东自营</van-tag>
                <van-tag plain type="danger">双十一特购</van-tag>
            </template>
            <template #footer>
                <van-button size="mini" @click="addShopCar">加入购物车</van-button>
                <van-button size="mini">购买</van-button>
            </template>
        </van-card>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload, Card, Tag, Button } from 'vant';

    Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Card).use(Tag).use(Button)

    export default {
        name:'SwipeSample',
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                shopImage: [
                    'https://img.yzcdn.cn/vant/ipad.jpeg',
                    'https://img.yzcdn.cn/vant/ipad.jpeg',
                    'https://img.yzcdn.cn/vant/ipad.jpeg',
                    'https://img.yzcdn.cn/vant/ipad.jpeg',
                    'https://img.yzcdn.cn/vant/ipad.jpeg',
                    'https://img.yzcdn.cn/vant/ipad.jpeg'
                ],
                countNum: 1
            }
        },
        methods: {
            shopDetail() {
                //  this.$rout  er.push("/MessageDetails")
            },
            addShopCar() {
                let data = this.countNum++;
                this.$emit('showNum', this.data)
                console.log(data)
            }
        },
    }
</script>

<style scoped>
    .movePic {
        width: 100%;
        height: 3em;
    }
</style>