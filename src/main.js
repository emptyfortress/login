import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import { router } from '@/router/router.js'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Quasar)
app.mount('#app')
