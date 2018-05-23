import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import show from '@/components/show'
import cart from '@/components/cart'
import goods from '@/components/goods'
import stores from '@/components/stores'
import personal from '@/components/personal'
import sell from '@/components/sell'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'show',
    	component: show
    },
    {
    	path: '/login',
    	name: 'login',
    	component: login
    },
    {
     	path: '/cart',
     	name: 'cart',
     	component: cart
    },
    {
    	path: '/goods',
    	name: 'goods',
    	component: goods
    },
    {
    	path: '/stores',
    	name: 'stores',
    	component: stores
    },
    {
    	path: '/personal',
    	name: 'personal',
    	component: personal
    },
    {
    	path: '/sell',
    	name: 'sell',
    	component: sell
    }
  ]
})
