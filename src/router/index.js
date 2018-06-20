import Vue from "vue";
import Router from "vue-router";
import About from "@/components/About";
import MainLayout from "../layouts/MainLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainLayout,
      children: [{ path: "", component: About }]
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
