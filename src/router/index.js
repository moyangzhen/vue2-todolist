import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home.vue";
import OrderView from "../views/Order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/order",
    name: "order",
    component: OrderView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
