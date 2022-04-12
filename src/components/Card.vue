<template lang="pug">
.card
	img(src="@/assets/logo.svg")
	slot
</template>

<script setup="setup"></script>

<style scoped lang="scss">
.card {
	padding: 1rem;
	padding-top: 2rem;
	padding-bottom: 0;
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
</style>
