<template lang="pug">
q-btn(color="white" align="left" text-color="black" no-caps).with
	img(:src="getImageUrl(icon)")
	span {{ label}}
</template>

<script setup="setup" lang="ts">
const props = defineProps({
	label: { type: String, default: 'label' },
	icon: { type: String, default: 'azure' },
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
