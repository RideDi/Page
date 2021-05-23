import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: import("../views/DashBoard.vue"),
    children: [
      {
        path: "public_opinion",
        name: "public_opinion",
        component: import("../components/public_opinion/index.vue"),
      },
      {
        path: "public_opinion/createtask",
        name: "public_opinion_create_task",
        component: import("../components/public_opinion/create_task.vue"),
      },
      {
        path: "public_opinion/mode_intro",
        name: "public_opinion_mode_intro",
        component: import("../components/public_opinion/mode_intro.vue"),
      },
      {
        path: "public_opinion/history_task",
        name: "public_opinion_history_task",
        component: import("../components/public_opinion/history_task.vue"),
      },
      {
        path: "account_check",
        name: "account_check",
        component: import("../components/account_check/create_task.vue"),
      },
      {
        path: "account_check_view",
        name: "account_check_view",
        component: import("../components/account_check/view.vue"),
      },
      {
        path: "account_check/history_task",
        name: "account_check_history_task",
        component: import("../components/account_check/history_task.vue"),
      },
      {
        path: "user",
        name: "user",
        component: import("../components/user/user_account.vue"),
      },
      {
        path: "crwal",
        name: "crwal",
        component: import("../components/data_crawl/crawl_mode.vue"),
      },
      {
        path: "crwal/user",
        name: "crwal_user",
        component: import("../components/data_crawl/user_crawl.vue"),
      },
      {
        path: "crwal/group",
        name: "crwal_group",
        component: import("../components/data_crawl/group_crawl.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  //hash
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
