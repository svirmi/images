import Vue from 'vue';
import VueRouter from "vue-router";
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import store from './store';
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    },
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    }
  ]
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app');
