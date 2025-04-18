import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/reset.css'
import usePlugins from './plugins'

const app = createApp(App)

usePlugins(app)

app.use(router)
app.mount('#app')
