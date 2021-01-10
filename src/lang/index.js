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
  {id:1,icon:'',locale:'zh',txt:'简体中文'},
  {id:1,icon:'',locale:'en',txt:'English'},
];
export default i18n;
