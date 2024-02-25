import '../assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './SidePanelApp.vue'
import {BaiDu} from '@/config/index.js'
console.log(BaiDu);
import { hotReload } from '../utils/hot_reload'

import { selectorMessage } from'@/utils/selector'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

hotReload()
selectorMessage();

