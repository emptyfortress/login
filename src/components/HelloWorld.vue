<template lang="pug">
h2 {{ msg }}
p {{ name }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('fff')

const props = defineProps({
	msg: {
		type: String,
		default: 'mylkajs',
	},
})
</script>

<style scoped lang="scss">
a {
	color: #42b983;
	&:hover {
		color: red;
	}
}
</style>
