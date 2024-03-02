import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vueCookies from "vue-cookies";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vueCookies, { expires: "1d" });
app.mount("#app");
