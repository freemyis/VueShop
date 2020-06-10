import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Persontr from '@/components/PersonTree'
import MessageDetails from '@/components/MessageDetails'
import SwipeSample from '@/components/SwipeSample'
import ShopMessage from '@/components/ShopMessage'
import ShopListItem from '@/components/ShopListItem'
import PersonCenter from '@/components/PersonCenter'
import PersonalStore from '@/components/PersonCenter/PersonalStore'

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
      component: Persontr,
      children: [
        {
          path: '/',
          name: 'SwipeSample',
          component: SwipeSample,
        },
        {
          path: 'ShopMessage',
          name: 'ShopMessage',
          component: ShopMessage
        },
        {
          path: 'ShopListItem',
          name: 'ShopListItem',
          component: ShopListItem
        },
        {
          path: 'PersonCenter',
          name: 'PersonCenter',
          component: PersonCenter,
          children: [
            {
              path: '/PersonalStore/:id',
              name: 'PersonalStore',
              component: PersonalStore
            }
          ]
        }
      ]
    },
    {
      path: '/MessageDetails',
      name: 'MessageDetails',
      component: MessageDetails
    },
  ]
})
