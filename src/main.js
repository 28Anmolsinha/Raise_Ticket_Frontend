import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import log from './utils/logger.js'; 

console.log("Logger initialized:", log);

const app = createApp(App);

app.use(router);
app.config.globalProperties.$log = log; 

app.mount("#app");

log.info("Vue app initialized!"); 