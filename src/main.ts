import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css"; // Globale CSS-Datei, falls verwendet


const app = createApp(App);
app.use(router);
app.mount("#app");
