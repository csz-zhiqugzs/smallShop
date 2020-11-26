import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Classification = () => import('../views/classification/Classification.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')

const routes = [
  {
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/classification',
		component: Classification
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/my',
		component: My
	},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
