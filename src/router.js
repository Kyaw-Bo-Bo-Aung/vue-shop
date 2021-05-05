import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Product from '@/views/Product'
import Profile from '@/views/Profile'
import ProductDetail from '@/views/ProductDetail'
import Err404 from '@/views/Err404'

Vue.use(VueRouter)

const errroute = {
	path: '/:catchAll(.*)',
	component: Err404
}

const routes = [
	{path: '/' , component: Home},

	{path: '/about', component: About},

	{path: '/login', component: Login},

	{path: '/product', component: Product},

	{
		path: '/profile', 
		component: Profile,
		beforeEnter: (to, from, next) => {
			// console.log("profile middleware")
			let auth = localStorage.getItem('auth')
			if(auth === "admin@gmail.com"){
				next()	
			}else{
				next('/login')
			}
			
		}

	},

	{
		path: '/products/:id', 
		component: ProductDetail,
	},
	errroute
]


const router = new VueRouter({
	mode: 'history',
	routes 
})

router.beforeEach((to, from, next) => {
	console.log("middleware is working")
	next();
})

export default router