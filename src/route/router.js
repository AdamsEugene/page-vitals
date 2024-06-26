// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "./components/GetStarted.vue";
import Steppers from "./components/Steppers.vue";
import Success from "./components/Success.vue";
import GetStartedBanner from "./components/GetStartedBanner.vue";

const routes = [
  {
    path: "/",
    name: "GetStarted",
    component: GetStarted,
  },
  {
    path: "/steppers",
    name: "Steppers",
    component: Steppers,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/banner",
    name: "GetStartedBanner",
    component: GetStartedBanner,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
