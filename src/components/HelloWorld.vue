<template lang="pug">
h2 hello
h3 {{ name }}
h3 {{ props.msg }}
q-btn(color="primary") button
</template>

<script setup="setup" lang="ts">
import { ref } from 'vue'
const name = ref('constant')
const props = defineProps({
	msg: {
		type: String,
		default: 'default msg',
	},
})
</script>

<style scoped lang="scss">
body {
	width: 100%;
}
</style>
