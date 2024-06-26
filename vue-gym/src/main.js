import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/storage"

createApp(App).use(router).use(store).use(router).mount('#app')
