import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL= 'https://8080-gabrielcout-springboot3-7a3qcklwx2v.ws-us110.gitpod.io/'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
