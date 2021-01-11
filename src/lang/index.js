import Vue from 'vue'
import I18n  from 'vue-i18n'
Vue.use(I18n)
const i18n=new I18n({
  locale:"zh",
  messages:{
    zh:require("./zh"),
    en:require("./en")
  }
});
export let languagelist=[
  {id:1,icon:require("../assets/language/zh-hans.png"),locale:'zh',txt:'简体中文'},
  {id:1,icon:require("../assets/language/en.png"),locale:'en',txt:'English'},
  {id:1,icon:require("../assets/language/da.png"),locale:'en',txt:'xsSDFS'},
];
export default i18n;
