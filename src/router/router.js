import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: Home,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/google',
			component: () => import('@/pages/Google.vue'),
			meta: { transition: 'fade', title: 'Login with Google' },
		},
		{
			path: '/fb',
			component: () => import('@/pages/Fb.vue'),
			meta: { transition: 'fade', title: 'Login with Facebook' },
		},
		{
			path: '/cookies',
			component: () => import('@/pages/Cookies.vue'),
			meta: { transition: 'fade', title: 'Cookies' },
		},
		{
			path: '/vendors',
			component: () => import('@/pages/Vendors.vue'),
			meta: { transition: 'fade', title: 'Vendors' },
		},

		// {
		// 	path: '/ks',
		// 	name: 'ks',
		// 	component: () => import('@/pages/Ks.vue'),
		// 	meta: { transition: 'slide-left', title: 'Супер конструктор' },
		// },
		// {
		// 	path: '/dashboard',
		// 	name: 'dashboard',
		// 	component: () => import('@/pages/Dashboard.vue'),
		// 	meta: { transition: 'slide-left', title: 'Дашборд' },
		// },
		// {
		// 	path: '/grid',
		// 	name: 'grid',
		// 	component: () => import('@/pages/Grid.vue'),
		// 	meta: { transition: 'slide-left', title: 'Grid' },
		// },
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
