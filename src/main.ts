import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "ant-design-vue/dist/antd.css";
import "./styles/custom.scss";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(Antd).mount("#app");
