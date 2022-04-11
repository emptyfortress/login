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
				q-item(v-for="n in 2" clickable v-ripple @click="$router.push('/congrat')")
					q-item-section(avatar)
						q-icon(name="mdi-account-circle")
					q-item-section(side)
						q-item-label.text-weight-bold username {{ n }}
						q-item-label(caption) email@google.com
				q-item(clickable v-ripple @click="say")
					q-item-section(avatar)
						q-icon(name="mdi-account-circle")
					q-item-section(side)
						q-item-label сменить аккаунт
			q-card-section.q-mt-lg.text-left Приложению Docsvison будет предоставлен доступ к вашим данным: имени, адресу элетронной почты, языковым настройкам и фото профиля. Прежде, чем начать работу с приложением Docsvison, вы можете ознакомится с его <a href="http://yandex.ru">политикой конфиденциальности</a>.

	q-card(v-show="vendor === 'fb'")
		q-card-section
			img(src="@/assets/fb.svg" width="40")
		q-card-section.text-center
			h6.q-mb-md Docsvison запрашивает доступ<br />к следующим данным:
			p имя, фото профиля и электронный адрес.
		q-card-section.text-center.column
			q-btn(color="primary" unelevated label="Продолжить как <username>" @click="$router.push('/congrat')")
			q-btn(color="grey-5" unelevated label="Отмена" text-color="black" @click="$router.push('/')").q-mt-sm.q-mb-lg
			.text-caption Если вы продожите, приложение Docsvison получит непрерывный доступ к информации, которой вы делитесь, при этом Facebook будет записывать обращения приложения Docsvison.<br /> <a href="http://yandex.ru">Подробнее</a> о доступе и имеющихся у вас настройках.
			.text-caption <a href="http://yandex.ru">Политика конфиденциальности</a> и <a href="http://yandex.ru">Условия</a> приложения Docsvison.

	q-dialog(v-model="account")
		q-card
			q-card-section
				div(class="text-h6") Сменить аккаунт
			q-card-section(class="q-pt-none")  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
			q-card-actions(align="right")
				q-btn(flat label="OK" color="primary" v-close-popup)

</template>

<script setup="setup" lang="ts">
import { useState } from '@/stores/store'
import { ref } from 'vue'

const state = useState()

const account = ref(false)

const variant = ref(state.variant)
const vendor = ref(state.vendor)
const say = () => {
	account.value = !account.value
}
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
