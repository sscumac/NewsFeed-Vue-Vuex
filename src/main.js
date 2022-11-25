import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/css/main.css";
import store from "./store/store";
import Newsfeed from "@/components/newsfeed/Newsfeed";
import Surprise from "@/components/samples/Surprise";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Newsfeed },
    { path: "/about", component: Surprise },
    { path: "/contact", component: Surprise },
    { path: "/surprise", component: Surprise },
  ],
});

app.use(store);
app.use(router);

app.mount("#app");
