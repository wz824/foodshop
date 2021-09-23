import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' //加载mockServer
import VueLazyload from 'vue-lazyload'//用于图片懒加载
import loading from './common/imgs/loading.gif'
Vue.config.productionTip = false
// 注册全局组件
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{
  loading
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
