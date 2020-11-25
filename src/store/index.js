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
        console.log(state.UI.menu)
        //routes[data.changekey].navChildShow=!data;
        //console.log(!data)
       // state={UI:{menu:[]}};
       routes[0].children[data.changekey].meta.navChildShow=!data;
       state.UI.menu=[...routes[0].children];
       //const newMenu={...state.UI.menu}
       //state.UI.menu=newMenu;
      // console.log(state.UI.menu)
    }
  },
  actions: {
  },
  modules: {
  }
})
