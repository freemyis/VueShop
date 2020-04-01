<template>
    <div>
        <BarSample :newTitle="message" :pagename='newName' :leftText="ltext" :leftArrow="lrrow"/>
    </div>
</template>

<script>
    import BarSample from '@/components/TabBarSample/BarSample'

    export default {
        name:'MessageDetails',
        components: {
            BarSample,
        },
        data() {
            return {
                message: "商品详情页面",
                newName:'Persontr',
                ltext:'返回',
                lrrow: true
            }
        },
    }
</script>

<style scoped>

</style>