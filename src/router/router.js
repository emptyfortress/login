import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Cookie from '@/pages/Cookie.vue'
import Vendors from '@/components/Vendors.vue'
import Congrat from '@/components/Congrat.vue'
import Stop from '@/components/Stop.vue'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/success',
		},
		{
			path: '/success',
			component: Home,
			props: { variant: 'success' },
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/error',
			component: Home,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/cookie',
			component: Cookie,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/congrat',
			component: Congrat,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/vendors',
			component: Vendors,
			meta: { transition: 'slide-left', title: 'Docsvision' },
		},
		{
			path: '/stop',
			component: Stop,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
