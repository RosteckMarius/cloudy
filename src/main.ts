import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Axios from "axios";

Axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
