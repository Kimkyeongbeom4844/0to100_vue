import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
// import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import User from "./pages/User.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/user/:id", component: User },
    { path: "/:pathMatch(.*)*", component: Home }, //예외 라우팅 처리
  ],
});

createApp(RouterView).use(router).mount("#app");
