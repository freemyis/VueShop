<template>
    <div>           
        <van-tabbar v-model="active" @change='onChange' route>
            <van-tabbar-item 
            replace
            to='/Persontr/'
            icon="home-o" 
            name='home'
            >Home</van-tabbar-item>
            <van-tabbar-item 
            to='/Persontr/ShopMessage'
            icon="search" 
            name='shop'
            >Shop</van-tabbar-item>
            <van-tabbar-item 
            to='/Persontr/ShopListItem'
            icon="friends-o" 
            name='ListItem'
            >ListItem</van-tabbar-item>
            <van-tabbar-item 
            to='/Persontr/PersonCenter'
            icon="setting-o" 
            name='user'
            >User</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';

    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    export default {
        name: 'BottomBar',
        data() {
            return {
                active: 'home'
            }
        },
        methods: {
            onChange() {
                
            }
        },
    }
</script>

<style scoped>
    .van-tabbar {
        background-color: currentColor;
    }
    .van-tabbar-item {
        color: azure !important;
    }
    .van-tabbar-item--active {
        color: #1989fa !important;
    }
</style>