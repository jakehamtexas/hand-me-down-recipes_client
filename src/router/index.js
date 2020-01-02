import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Recipes.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
