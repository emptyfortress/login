<template lang="pug">
img(src="@/assets/logo.png")
p text from app
HelloWorld
</template>

<script setup="setup" lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
