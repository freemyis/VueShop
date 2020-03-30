import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Persontr from '@/components/PersonTree'
import MessageDetails from '@/components/MessageDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Persontr',
      name: 'Persontr',
      component: Persontr
    },
    {
      path:'/MessageDetails',
      name:'MessageDetails',
      component: MessageDetails
    }
  ]
})
