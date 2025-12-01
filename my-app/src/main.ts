import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './Typescript/2.type'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
