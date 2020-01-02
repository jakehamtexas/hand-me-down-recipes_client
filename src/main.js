import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dotenv from "dotenv";
import Axios from "axios";

dotenv.config();
Vue.config.productionTip = false;
Vue.use(Axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
