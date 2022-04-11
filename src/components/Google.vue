<template lang="pug">
div
	q-card(v-show="vendor === 'google'")
		q-card-section.enter
			img(src="@/assets/google.svg")
			span Войдите в аккаунт гугл
		q-separator
		q-card-section.choose
			.zag Выберите аккаунт
			p для перехода в приложение &nbsp;
				span Docsvison
			q-list(separator bordered).q-mt-lg
				q-item(v-for="n in 2" clickable v-ripple)
					q-item-section(avatar)
						q-icon(name="mdi-account-circle")
					q-item-section(side)
						q-item-label.text-weight-bold username {{ n }}
						q-item-label(caption) email@google.com
				//- q-item
					q-item-section(avatar)
						q-icon(name="mdi-account-circle")
					q-item-section(side)
						q-item-label сменить аккаунт
			q-card-section.q-mt-lg.text-left Приложению Docsvison будет предоставлен доступ к вашим данным: имени, адресу элетронной почты, языковым настройкам и фото профиля. Прежде, чем начать работу с приложением Docsvison, вы можете ознакомится с его <a href="yandex.ru">политикой конфиденциальности</a>.

	q-card(v-show="vendor === 'fb'")
		p fg
</template>

<script setup="setup" lang="ts">
import { useState } from '@/stores/store'
import { ref } from 'vue'

const state = useState()

const variant = ref(state.variant)
const vendor = ref(state.vendor)
</script>

<style scoped lang="scss">
/*@import '@/assets/styles/theme.scss';*/
.q-card {
	width: 450px;
	text-align: left;
}
.enter {
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	border-bottom: 1px solid #ccc;
}
.choose {
	text-align: center;
	padding: 2rem;
	padding-top: 1rem;
	.zag {
		font-size: 1.3rem;
	}
	span {
		font-weight: bold;
		color: $primary;
		font-size: 1.1rem;
	}
}
</style>
