<template lang="pug">
h2 {{ msg }}
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
	setup() {
		const msg = ref('lakjsdlk')

		return { msg }
	},
}
</script>

<style scoped lang="scss">
a {
	color: #42b983;
	&:hover {
		color: red;
	}
}
</style>
