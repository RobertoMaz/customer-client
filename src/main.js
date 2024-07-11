import './assets/main.css'
import {plugin, defaultConfig} from '@formkit/vue'
import config from '../formkit.config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useToast } from 'vue-toast-notification'
import "vue-toast-notification/dist/theme-bootstrap.css"

const $toast = useToast({
    duration: 5000,
    position: 'top-right'
})

const app = createApp(App)

app.provide('toast', $toast)
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')
