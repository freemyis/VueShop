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
            :badge="shopNumber"
            >Shop</van-tabbar-item>
            <van-tabbar-item 
            to='/Persontr/ShopListItem'
            icon="friends-o" 
            name='ListItem'
            :badge="listNumber"
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
    import {mapState, mapGetters} from 'vuex'
    // import CenterNull from '../CenterNull'
    import { Tabbar, TabbarItem } from 'vant';

    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    export default {
        name: 'BottomBar',
        data() {
            return {
                active: 'home',
                // shopNumber: ''
            }
        },
        methods: {
            onChange() {
                
            },
        },
        mounted () {
            /******************************** */
            //使用中间vue实现兄弟组件传值。
            // CenterNull.$on("showNum",(val)=>{
            //     console.log(val);
            //     this.shopNumber = val;
            // })
            /******************************** */
        },
        /******************************** */
        //使用计算方法获取vuex的state
        // computed: {
        //     shopNumber() {
        //         return this.$store.state.count === 0 ? '' : this.$store.state.count;
        //     }
        // },
        /******************************** */
        // 单独使用mapState
        // computed: mapState({
        //     shopNumber: state => state.count === 0 ? '' : state.count     //'count'//
        // })
        /******************************** */
        //使用对象展开运算符混合使用mapState和局部计算方法。
        computed: {
            /***************** */
            //平常计算属性获取getters.
            // listNumber() {
            //     // console.log(this.$store.getters.getTodoByid(2))    根据id获取筛选数据。
            //     return this.$store.getters.todosNum;
            // },
            /******************** */
            ...mapState({
                shopNumber: state => state.count === 0 ? '' : state.count,
                
            }),
            ...mapGetters({
                listNumber: 'todosNum'
            })
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