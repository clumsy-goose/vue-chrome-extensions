console.log('this is content.js')
import { hotReload } from "@/utils/hot_reload"
import { createApp } from 'vue'
import App from './ContentApp.vue'
import { selectorMessage } from'@/utils/selector'

const app = createApp(App)
let body = document.querySelector("body");
let container = document.createElement("div");
container.id = "ContentView";
container.style.display = "block";
body.appendChild(container);
app.mount("ContentView");

hotReload();
