import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as Icons from "oh-vue-icons/icons";
import route from "./routes";

const Fa = Object.values({ ...Icons });
addIcons(...Fa);

createApp(App).use(route).component("v-icon", OhVueIcon).mount("#app");
