<template lang="pug">
div
	.card
		img(src="@/assets/warning.svg").warn
		.text  В процессе аутентификации возникли ошибки.br  В Docsvision нет такого пользователя.br br  Пожалуйста, выберите другой способ входа или обратитесь к администратору.
		q-btn(label="Понятно" color="primary" @click="$router.push('/')")
		img(src="@/assets/logo.svg").logo
</template>

<script setup="setup" lang="ts"></script>

<style scoped lang="scss">
.card {
	position: relative;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 1rem;
	padding-top: 2rem;
	/* padding-bottom: 0; */
	min-height: 300px;
	width: 430px;
	border: 1px solid rgba($color: red, $alpha: 1);
	border-radius: 0.3rem;
	background: rgba($color: #000000, $alpha: 0.8);
	box-shadow: -8px -8px 6px rgba($color: #000000, $alpha: 0.5),
		8px 8px 6px rgba($color: #000000, $alpha: 0.5);
	.logo {
		width: 80px;
		align-self: flex-end;
	}
	.warn {
		position: absolute;
		top: -28px;
		width: 48px;
	}
	.text {
		font-size: 1.1rem;
		margin-top: 2rem;
		white-space: normal;
	}
}
</style>
