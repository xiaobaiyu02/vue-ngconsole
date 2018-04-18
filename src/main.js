// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import 'velocity-animate'
import "@/css/common.css"
import "@/css/font-jj.css"

Vue.use(VueBus);
Vue.use(VueI18n);

Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./assets/lang/zh'),   // 中文语言包
    'en-US': require('./assets/lang/en')    // 英文语言包
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
