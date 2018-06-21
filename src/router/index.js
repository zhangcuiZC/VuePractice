import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import { getCookie } from "@/utils/cookie";
import About from "@/components/About";
import MainLayout from "../layouts/MainLayout.vue";

import content from "./content";

const MainView = { template: "<router-view></router-view>", name: "MainView" };

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "", redirect: "content" },
        {
          path: "content",
          children: content,
          component: MainView
        },
        { path: "user", name: "About", component: About }
      ]
    },
    {
      path: "/login",
      component: { template: "<h1>Login Page</h1>" }
    },
    {
      path: "*",
      component: { template: "<h1>Page Not Found</h1>" }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const role = to.meta.role;
  const crtRole = getCookie("role");
  if (role && role.indexOf(crtRole) === -1) {
    return next({ path: "/notFound" });
  }
  return next();
});

export default router;
