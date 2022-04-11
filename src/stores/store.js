import { defineStore } from 'pinia'

export const useState = defineStore({
	id: 'state',
	state: () => ({
		var: 1,
	}),
	getters: {},
	actions: {},
})
