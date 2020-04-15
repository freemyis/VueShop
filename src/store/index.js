import Vue from 'vue'
import Vuex from 'vuex'
import foods from './foods'
import playgames from './playgames'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        foods,
        playgames,
    }
})


// const shopMessage = {
//     namespaced: true,
//     state: {
//         name: 'shopA',
//         type: 'shopA',
//     },
//     mutations: {
//         updateNameMut(state, newstr){
//             state.name = state.name + "   "+ newstr
//         }
//     },
//     actions: {
//         udpateNameAct({commit}, newstr) {
//           commit("updateNameMut", newstr)
//         }
//       },
//     getters: {
//         getShopA(state){
//             return state.name
//         }
//     }
// }

// const userMessage = {
//     namespaced: true,
//     state: {
//         name: 'userA',
//         type: 'userA',
//     },
//     mutations: {
//         updateNameMut(state, newstr){
//             state.name = state.name + "   "+ newstr
//         }
//     },
//     actions: {
//         udpateNameAct({commit}, newstr) {
//           commit("updateNameMut", newstr)
//         }
//       },
//     getters: {
//         getUserA(state){
//             return state.name
//         }
//     }
// }