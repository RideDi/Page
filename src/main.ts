import axios from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "tailwindcss/tailwind.css";
import animated from "animate.css";
import store from "./store";
import * as echarts from "echarts";
import "echarts-gl";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.provide("root", this);
app.use(store);
app.use(animated);
app.use(router);
app.use(axios);
app.use(ElementPlus);
app.use(VueApexCharts);
app.mount("#app");
app.config.globalProperties.$echarts = echarts;
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("ins_toolkit_token") || "";
  //配置接口信息
  // Axios.defaults.baseURL = '/admin_routers';
  // Axios.defaults.headers.common['Authorization'] = token;
  // Axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';
  if (!token && to.name !== "login") {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
