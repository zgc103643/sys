import Vue from 'vue'
import Vuex from 'vuex'
import routes from "../router/router.onfig"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UI:{
      menu:routes[0].children
    }
  },
  getters: {
    
  },
  mutations: {
    UI_menu_click_toggle(state,data){
     // console.log(data.routerInfo)
      /*恢复所有隐藏子导航*/
      for(let key in state.UI.menu){
        if(state.UI.menu[key].meta){
            state.UI.menu[key].meta.navChildShow=false;
        }
      }
      /*显示对应的子导航*/
      state.UI.menu[data.changekey].meta.navChildShow=!data.show;
    }
  },
  actions: {
  },
  modules: {
  }
})
