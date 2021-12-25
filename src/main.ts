import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import { registerApp } from '@/global/index'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

const app = createApp(App)
// registerApp(app)
app.use(registerApp)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
