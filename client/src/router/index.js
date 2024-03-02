import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        isAuth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        isAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        isAuth: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        isAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const needAuth = to.meta.isAuth;
  if (!$cookies.get("token") && needAuth) next("login");
  else next();
});

export default router;
