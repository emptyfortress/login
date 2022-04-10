<template lang="pug">
.card
	img(src="@/assets/logo.svg")
	.form
		MyButton(v-for="button in buttons" :key="button.icon" :label="button.label" :icon="button.icon")

</template>

<script setup="setup" lang="ts">
import MyButton from '@/components/MyButton.vue'

const buttons = [
	{ label: 'Продолжить с Azure', icon: 'azure' },
	{ label: 'Продолжить с Google', icon: 'google' },
	{ label: 'Продолжить с Facebook', icon: 'fb' },
	{ label: 'Продолжить с Twitter', icon: 'twitter' },
]
</script>

<style scoped lang="scss">
.card {
	padding: 1rem;
	padding-top: 2rem;
	min-height: 50%;
	min-width: 500px;
	border: 1px solid #ffffffaa;
	border-radius: 0.3rem;
	background: rgba($color: #000000, $alpha: 0.7);
	box-shadow: -8px -8px 6px rgba($color: #000000, $alpha: 0.5),
		8px 8px 6px rgba($color: #000000, $alpha: 0.5);
	img {
		width: 180px;
	}
	.q-btn {
		/* width: 280px; */
	}
}
.form {
	width: 240px;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
</style>
