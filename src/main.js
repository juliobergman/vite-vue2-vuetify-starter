import Vue from "vue";
import Vuetify from "./plugins/vuetify";
import router from "./router";

import App from "./App.vue";

new Vue({
  router,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount("#app");
