<template lang="pug">
.card
	h4 Вы успешно<br /> авторизовались
	img(src="@/assets/thumbs-up.svg")
</template>

<script setup="setup" lang="ts"></script>

<style scoped lang="scss">
/*@import '@/assets/styles/theme.scss';*/
.card {
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
