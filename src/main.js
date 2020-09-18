import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局css默认样式
import global from './assets/css/global.css'
// 国际化
import i18n from './lang/index'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
