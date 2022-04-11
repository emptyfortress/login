import { defineStore } from 'pinia'

export const useState = defineStore({
	id: 'state',
	state: () => ({
		variant: 'success',
		vendor: 'google',
	}),
	getters: {},
	actions: {
		setVar(e) {
			this.variant = e
		},
		setVendor(e) {
			this.vendor = e
		},
	},
})
