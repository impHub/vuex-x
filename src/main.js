import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Axios from 'axios'
import ElementUI from 'element-ui'
// 引入ele-ui
// import ElementUI from 'element-ui'
// 引入ele-ui CSS样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.use(iView);

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com' 


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
