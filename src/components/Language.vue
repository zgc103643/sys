<template>
    <div class="language" @click="$emit('languageSwitchToggle','default')">
          <span v-text="languageText">Language</span>
          <ul v-if="languageSwitch">
            <li v-for="(item,key) in languagelist" v-bind:key="key" @click="languageToggle(item.locale,item.txt)" v-bind:class="languageText===item.txt?'languageActive':''">
              <span>icon</span>
              <span v-text="item.txt"></span>
            </li>
          </ul>
    </div>
</template>
<script>
import {languagelist} from "../lang";
export default {
  props:["languageSwitch"],
  data(){
    return {
        languageText:languagelist[0].txt,
    }
  },
   computed:{
      languagelist(){
        return languagelist;
      }
  },
   methods:{
    languageToggle(locale,txt){
      //this.$store.commit("UI_menu_click_toggle",data);
      //console.log(data);
      this.$i18n.locale=locale
      this.$data.languageText=txt;
    }
  },
  //建议放到组件里面，比较方便代码复用
  beforeMount() {  
    this._close = e => {
      // 如果点击发生在当前组件内部，则不处理
      if (this.$el.contains(e.target)) { 
             return;
      }
      this.$emit('languageSwitchToggle',"close");
    }; 
    console.log(this.languageSwitch)
    document.body.addEventListener('click', this._close);
    
  },
  beforeDestroy() {  
    document.body.removeEventListener('click', this._close);  
  }
}
</script>
<style scoped lang="less">
   .language{
     line-height: @AppHead_Height;
     float: right;
     margin-right:20px;
     position: relative;
   }
   .language ul{
     position: absolute;
     background: #ffffff;
     padding:0 10px;
     left: 50%;
     transform: translateX(-50%);
   }
   .language ul .languageActive{
     background: #eee;
   }
</style>