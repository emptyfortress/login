<template lang="pug">
img(alt="Vue logo" src="@/assets/logo.png")
HelloWorld(msg="oooooooooooooooo")
.test
	span laksjd
</template>

<script setup lang="ts">
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
.test {
	color: red;
}
</style>
