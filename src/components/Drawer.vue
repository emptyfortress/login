<template lang="pug">
br
q-list(bordered)
	q-item(dark clickable v-ripple v-for="item in items" :to="item.to" exact)
		q-item-section(avatar)
			q-icon(:name="item.icon")
		q-item-section(side)
			q-item-label {{ item.label }}
</template>

<script setup="setup" lang="ts">
const items = [
	{ label: 'Успешный сценарий', icon: 'mdi-numeric-1-box', to: '/login' },
	{ label: 'Ошибка', icon: 'mdi-numeric-2-box', to: '/error' },
	{
		label: 'Повторный логин (куки)',
		icon: 'mdi-numeric-3-box',
		to: '/cookies',
	},
]
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
