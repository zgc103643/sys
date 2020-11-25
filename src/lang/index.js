import Vue from 'vue'
import I18n  from 'vue-i18n'
Vue.use(I18n)
const i18n=new I18n({
  locale:"zh",
  messages:{
    zh:require("./zh"),
    en:require("./en")
  }
})

export default i18n