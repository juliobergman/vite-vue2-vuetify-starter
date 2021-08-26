import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: HelloWorld,
    name: "HelloWorld",
    path: "/",
    meta: { depth: "0" },
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
