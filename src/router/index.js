import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/home/Home")
  },
  {
    path: "/category",
    component: () => import("../views/category/Category")
  },
  {
    path: "/profile",
    component: () => import("../views/profile/Profile")
  },
  {
    path: "/cart",
    component: () => import("../views/shopping/Shopping")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
