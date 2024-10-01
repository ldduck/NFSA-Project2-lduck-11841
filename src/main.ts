import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3WordCloud from 'vue3-word-cloud'
const app = createApp(App)

app.use(createPinia())
app.use(router)

if (Vue3WordCloud.name) {
  app.component(Vue3WordCloud.name, Vue3WordCloud)
}
app.component('Vue3WordCloud', Vue3WordCloud)

app.mount('#app')
