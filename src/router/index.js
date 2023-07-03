import { createRouter, createWebHistory } from "vue-router";
import Users from "../components/Users.vue";
import Payments from "../components/Payments.vue";

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
