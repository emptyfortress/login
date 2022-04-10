<template lang="pug">
.card
	img(src="@/assets/logo.svg")
</template>

<script setup="setup" lang="ts"></script>

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
}
</style>
