<template lang="pug">
.container
	router-view
</template>

<script setup="setup" lang="ts"></script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	background: url('@/assets/login.jpg');
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100vh;
}
.container {
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
