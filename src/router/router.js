import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Cookie from '@/pages/Cookie.vue'
import Google from '@/components/Google.vue'
import Congrat from '@/components/Congrat.vue'
import Fb from '@/components/Fb.vue'

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
			meta: { title: 'Docsvision' },
		},
		{
			path: '/congrat',
			component: Congrat,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
		{
			path: '/google',
			component: Google,
			meta: { transition: 'slide-left', title: 'Docsvision' },
		},
		{
			path: '/fb',
			component: Google,
			meta: { transition: 'fade', title: 'Docsvision' },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
