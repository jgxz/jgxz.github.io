import { HOME_PATH, HOME_PATH_NAME } from "@/consts/router"
import { createRouter, createWebHistory } from "vue-router"

const HomeView = () => import("../views/HomeView.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PATH,
      name: HOME_PATH_NAME,
      component: HomeView,
    },
  ],
})

export default router
