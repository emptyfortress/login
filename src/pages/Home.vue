<template lang="pug">
.card
	img(src="@/assets/logo.svg")
	.coki(v-if="state.variant === 'cookie'")
		img(src="@/assets/user.svg")
		.q-mt-md.text-white.text-h6 Привет, Оля!
	.form
		MyButton(v-if="state.variant !== 'cookie'" v-for="button in buttons" :key="button.icon" :label="button.label" :icon="button.icon" url="/vendors" @click="setVendor(button.icon)")
		.grid(v-if="state.variant !== 'cookie'" )
			q-separator(color="white")
			div ИЛИ
			q-separator(color="white")

		q-btn(v-if="$route.fullPath === '/google'" color="white" align="left" text-color="black" no-caps @click="repeatGoogle").with
			img(src="@/assets/google.svg")
			span Продолжить с Google

		q-input(v-model="dvlogin" v-if="state.cookie !== 'cookie'" outlined dark dense placeholder="Docsvision login")
		q-input(v-model="password" v-if="$route.fullPath !== '/google'" outlined dark dense :type="isPwd ? 'password' : 'text'" placeholder="Password")
			template(v-slot:append)
				q-icon(:name="isPwd ? 'mdi-eye-off' : 'mdi-eye'" class="cursor-pointer" @click="isPwd = !isPwd")
		q-btn(color="primary"  v-if="$route.fullPath !== '/google'" :disabled="!(dvlogin.length && password.length)" @click="router.push('/congrat')").q-mt-md Войти
		.capt(v-if="state.variant === 'cookie'")
			span(@click="back").link Сменить пользователя
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useState } from '@/stores/store'
import { router } from '@/router/router'
import MyButton from '@/components/MyButton.vue'

const isPwd = ref(true)
const password = ref('')
const dvlogin = ref('')
const state = useState()

watchEffect(() => {
	if (state.cookie === 'cookie') {
		dvlogin.value = 'kmg01@docsvision.com'
	}
})

const buttons = [
	{ label: 'Продолжить с Google', icon: 'google' },
	{ label: 'Продолжить с Facebook', icon: 'fb' },
]
const setVendor = (e) => {
	state.setVendor(e)
}
const back = () => {
	state.setVar('success')
	dvlogin.value = ''
	password.value = ''
	router.push('/success')
}
const repeatGoogle = () => {
	state.setVendor('google')
	router.push('/vendors')
}
</script>

<style scoped lang="scss">
.card {
	padding: 1rem;
	padding-top: 2rem;
	padding-bottom: 0;
	min-height: 300px;
	min-width: 400px;
	border: 1px solid rgba($color: #ffffff, $alpha: 0.3);
	border-radius: 0.3rem;
	background: rgba($color: #000000, $alpha: 0.8);
	box-shadow: -8px -8px 6px rgba($color: #000000, $alpha: 0.5),
		8px 8px 6px rgba($color: #000000, $alpha: 0.5);
	img {
		width: 180px;
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
	.coki {
		img {
			width: 90px;
			margin-top: 1rem;
		}
	}
	.capt {
		color: white;
		margin-top: 0.5rem;
		margin-bottom: 0;
	}
	.link {
		margin-left: 0.5rem;
		text-decoration: underline;
		cursor: pointer;
	}
}
.with {
	img {
		width: 24px;
		margin-right: 1rem;
	}
}
</style>
