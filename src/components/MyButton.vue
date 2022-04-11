<template lang="pug">
q-btn(color="white" align="left" text-color="black" no-caps :to="url").with
	img(:src="getImageUrl(icon)")
	span {{ label}}
</template>

<script setup="setup">
const props = defineProps({
	label: { type: String, default: 'label' },
	icon: { type: String, default: 'azure' },
	url: { type: String, default: 'login' },
})

function getImageUrl(name) {
	return new URL(`../assets/${name}.svg`, import.meta.url).href
}
</script>

<style scoped lang="scss">
/*@import '@/assets/styles/theme.scss';*/
.with {
	img {
		width: 24px;
		margin-right: 1rem;
	}
}
</style>
