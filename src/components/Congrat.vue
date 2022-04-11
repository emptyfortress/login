<template lang="pug">
.card
	img(src="@/assets/thumbs-up.svg")
	h5 Вы успешно<br /> авторизовались
	q-btn(color="primary" label="Назад" @click="$router.push('/')")
</template>

<script setup="setup" lang="ts"></script>

<style scoped lang="scss">
/*@import '@/assets/styles/theme.scss';*/
.card {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	padding: 1rem;
	padding-top: 2rem;
	min-height: 300px;
	min-width: 400px;
	border: 1px solid rgba($color: #ffffff, $alpha: 0.3);
	border-radius: 0.3rem;
	background: rgba($color: #000000, $alpha: 0.7);
	box-shadow: -8px -8px 6px rgba($color: #000000, $alpha: 0.5),
		8px 8px 6px rgba($color: #000000, $alpha: 0.5);
	color: white;
	img {
		width: 120px;
	}
}
</style>
