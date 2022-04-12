<template lang="pug">
br
q-list(bordered)
	q-item(dark clickable v-ripple v-for="item in items" :to="item.to" exact @click="setVar(item.id)")
		q-item-section(avatar)
			q-icon(:name="item.icon")
		q-item-section(side)
			q-item-label {{ item.label }}
</template>

<script setup lang="ts">
import { useState } from '@/stores/store'

const items = [
	{
		id: 'success',
		label: 'Успешный сценарий',
		icon: 'mdi-numeric-1-box',
		to: '/success',
	},
	{ id: 'error', label: 'Ошибка', icon: 'mdi-numeric-2-box', to: '/error' },
	{
		id: 'cookie',
		label: 'Повторный логин (DV)',
		icon: 'mdi-numeric-3-box',
		to: '/cookie',
	},
	{
		id: 'cookie',
		label: 'Повторный логин (Google)',
		icon: 'mdi-numeric-4-box',
		to: '/google',
	},
]
const state = useState()

const setVar = (e) => {
	state.setVar(e)
	state.setCookie(e)
}
</script>

<style scoped lang="scss">
/*@import '@/assets/styles/theme.scss';*/
.q-list {
	margin-top: 5rem;
}
.q-item {
	padding-left: 2rem;
}
.q-router-link--active {
	background: rgba($color: $primary, $alpha: 0.4);
	color: white;
}
</style>
