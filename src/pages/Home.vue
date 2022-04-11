<template lang="pug">
.card
	img(src="@/assets/logo.svg")
	p.text-white {{ state.variant }}
	.form
		MyButton(v-for="button in buttons" :key="button.icon" :label="button.label" :icon="button.icon" url="/vendors" @click="setVendor(button.icon)")
		.grid
			q-separator(color="white")
			div ИЛИ
			q-separator(color="white")

		q-input(v-model="dvlogin" outlined dark dense placeholder="Docsvision login")
		q-input(v-model="password" outlined dark dense :type="isPwd ? 'password' : 'text'" placeholder="Password")
			template(v-slot:append)
				q-icon(:name="isPwd ? 'mdi-eye-off' : 'mdi-eye'" class="cursor-pointer" @click="isPwd = !isPwd")
		q-btn(color="primary" :disabled="!(dvlogin.length && password.length)" @click="router.push('/congrat')").q-mt-md Войти
</template>

<script setup="setup">
import { ref } from 'vue'
import MyButton from '@/components/MyButton.vue'
import { useState } from '@/stores/store'
import { router } from '@/router/router'

const isPwd = ref(true)
const dvlogin = ref('')
const password = ref('')

const state = useState()

const buttons = [
	{ label: 'Продолжить с Google', icon: 'google' },
	{ label: 'Продолжить с Facebook', icon: 'fb' },
]
const setVendor = (e) => {
	state.setVendor(e)
}
</script>

<style scoped lang="scss">
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
	img {
		width: 180px;
	}
}
.form {
	width: 240px;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.grid {
	display: grid;
	grid-template-columns: 1fr 80px 1fr;
	align-content: center;
	height: 50px;
	color: #fff;
	margin-left: -20px;
	margin-right: -20px;
	font-size: 1rem;
	align-items: center;
}
</style>
