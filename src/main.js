import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import VueForm from 'vue-form';

Vue.use(VueForm);
Vue.use(SuiVue);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
