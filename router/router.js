import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			// redirect: '/ks',
		},
		{
			path: '/ks',
			name: 'ks',
			component: () => import('@/pages/Ks.vue'),
			meta: { transition: 'slide-left', title: 'Супер конструктор' },
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@/pages/Dashboard.vue'),
			meta: { transition: 'slide-left', title: 'Дашборд' },
		},
		{
			path: '/grid',
			name: 'grid',
			component: () => import('@/pages/Grid.vue'),
			meta: { transition: 'slide-left', title: 'Grid' },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
