<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
});

store.commit('increment');
console.log(store.state.count);

    export default {
        name: 'ShopListItem',
        data() {
            return {
                message: 'Hello World.'
            }
        },
        computed: {
            count() {
                return store.state.count;
            }
        },
    }
</script>

<style scoped>
    h1 {
        margin-top: 6em;
    }
</style>