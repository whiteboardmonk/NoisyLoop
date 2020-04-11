// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import feather from 'vue-icon';
import VModal from 'vue-js-modal';
import App from './App';

Vue.config.productionTip = false;
Vue.use(feather, {
  name: 'v-icon',
  props: {
    baseClass: {
      type: String,
      default: 'v-icon',
    },
    classPrefix: {
      type: String,
      default: 'v-icon-',
    },
  },
});
Vue.use(VModal, { dialog: true });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
