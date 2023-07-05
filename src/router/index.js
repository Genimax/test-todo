import { createRouter, createWebHistory } from "vue-router";
import Users from "../components/pages/Users.vue";
import Payments from "../components/pages/Payments.vue";

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
