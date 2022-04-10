<template lang="pug">
q-layout(view="hHh lpR fFf")
	q-drawer(show-if-above v-model="leftDrawerOpen" side="left" overlay bordered)
	q-page-container
		.container
			router-view
	q-footer(bordered)
		q-toolbar
			q-btn(flat round dense icon="mdi-menu" @click="leftDrawerOpen = !leftDrawerOpen").q-mr-sm

</template>

<script setup="setup" lang="ts">
import { ref, reactive } from 'vue'
const leftDrawerOpen = ref(false)
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.q-page-container {
	background: url('@/assets/login.jpg');
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100vh;
}

.container {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.q-drawer {
	background: $dark1;
}
.q-footer {
	background: $dark;
}
</style>
