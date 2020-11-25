import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mocks/index.js'
import { Upload, Icon, Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Upload);
Vue.use(Icon);
Vue.use(Button);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
