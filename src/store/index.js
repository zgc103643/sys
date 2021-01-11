import Vue from 'vue'
import Vuex from 'vuex'
import routes from "../router/router.onfig"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UI:{
      menu:routes[0].children,//当前左侧导航数据
      menu_url_info:[],//当前url地址信息数据
    }
  },
  getters: {
    
  },
  mutations: {
    UI_menu_url_info(state,data){
      //console.log(state,data)
      let dataUrl=Array.from(data);
      dataUrl=dataUrl.filter(v=>v.path!=="");
      state.UI.menu_url_info=dataUrl;
    }
  },
  actions: {
  },
  modules: {
  }
})
