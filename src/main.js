// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
// import Vuex from 'vuex'
import store from './store/index'
import Echarts from 'vue-echarts'
import Moment from 'moment'
import axios from 'axios'

Vue.component('v-chart', Echarts)

Vue.prototype.$axios = axios;

// Vue.use(Vuex)

Vue.config.productionTip = false
/****************************  尝试使用namespaced来访问vuex  *************************** */
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     name: 'test',
//     todos: [
//       {id: 1, name: '...', complent: true},
//       {id: 2, name: '...', complent: false},
//       {id: 3, name: '...', complent: true},
//       {id: 4, name: '...', complent: true},
//       {id: 5, name: '...', complent: false},
//       {id: 6, name: '...', complent: true},
//     ]
//   },
//   ///在vuex中mutations都是同步的
//   mutations: {
//     crement(state) {
//       state.count++;
//     }
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.complent)
//     },
//     todosNum: (state,getters) => {
//       return getters.doneTodos.length;
//     },
//     getTodoByid: (state) => (id) => {
//       return state.todos.find(todo => todo.id === id)
//     } 
//   },
//   actions: {
//     increments({commit}) {
//       commit("crement")
//     }
//   }
// })

///注册一个全局过滤器来格式化后台传过来的时间，使用管道符
Vue.filter('TimeFormatter', (time, mode) => Moment(time).format(mode));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
