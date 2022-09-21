import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyView.vue"),
    },
    {
      path: "/personnel",
      name: "personnel",
      component: () => import("../views/PersonnelView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/publications",
      name: "publications",
      component: () => import("../views/PublicationsView.vue"),
    },
  ],
});

export default router;
