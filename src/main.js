import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./store";

createApp(App).use(router).use(pinia).mount("#app");
