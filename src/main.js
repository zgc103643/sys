import Vue from 'vue'

/*I18n配置*/
import lang from './lang'

/*router配置*/
import router from './router'

/*component配置*/
import App from './App.vue'

/*vuex配置*/
import store from './store'

Vue.config.productionTip = false

export default new Vue({
  render: h => h(App),
  router:router,
  store:store,
  i18n:lang,
  created(){
    //document.title=this.Global.appName;
    document.title=111;
  }
}).$mount('#app');
