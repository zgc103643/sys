<template>
    <div class="language" @click="$emit('languageSwitchToggle','default')">
      <span class="icon"  v-bind:style="{background:`url(${languageIcon}) no-repeat center/18px 14px`}"></span>
      <span class="txt" v-text="languageText"></span>
          <ul v-if="languageSwitch" class="menu_box">
            <li v-for="(item,key) in languagelist" v-bind:key="key" @click="languageToggle(item.locale,item.txt,item.icon)" v-bind:class="{active:languageText===item.txt,menu_box_first_child:key===0,menu_box_last_child:languagelist.length===key+1}">
              <span class="icon"  v-bind:style="{background:`url(${item.icon}) no-repeat center/18px 14px`}"></span>
              <span class="txt" v-text="item.txt"></span>
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
        languageIcon:languagelist[0].icon
    }
  },
   computed:{
      languagelist(){
        return languagelist;
      }
  },
   methods:{
    languageToggle(locale,txt,icon){
      //this.$store.commit("UI_menu_click_toggle",data);
      //console.log(data);
      this.$i18n.locale=locale
      this.$data.languageText=txt;
      this.$data.languageIcon=icon
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
     height:@AppHead_Height;
     line-height: @AppHead_Height;
     float: right;
     margin-right:20px;
     position: relative;
     cursor: pointer;
     padding:@AppHead_Right_Btn_Padding;
   }
   .language ul{
     position: absolute;
     background: #ffffff;
     right:-1px;
     top:@AppHead_Height+5;
     line-height: normal;
     border:1px solid @menu_box_border_color;
     white-space: nowrap;
   }
   .language ul li{
     white-space: nowrap;
     padding:0 10px;
   }
   .language .icon{
     display: inline-block;
     width: 18px; height: @AppHead_Height - 20;
     line-height: @AppHead_Height - 20;
     vertical-align: middle;
     margin-right: 5px;
   }
   .language .txt{
     height: @AppHead_Height - 20;
     line-height: @AppHead_Height - 20;
     display: inline-block;
     vertical-align: middle;
   }
</style>