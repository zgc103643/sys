<template>
  <div id="AppHead">
     <div class="AppHeadLeft">LOGO</div>
     <div class="AppHeadRight">
       
       <div v-if="menu_url_info" class="menu_url_info">位置：
         <template v-for="(item,key) in menu_url_info" >
            <router-link v-bind:key="key"  v-bind:to="item.path">
              <span v-if="key>0" class='line'>&nbsp;/&nbsp;</span>
              <span v-if="item.meta" v-text="$t(item.meta.navText)" v-bind:class="key>0?'a_disable':'a_enable'"></span>
            </router-link>
         </template>
       </div>
       <language v-bind:languageSwitch="languageSwitch" @languageSwitchToggle="languageSwitchToggle($event)"  />
     </div>

     
  </div>
</template>
<script>
import language from "./Language";
export default {
  components:{language},
  data(){
    return {
       languageSwitch:false,
    }
  },
   computed:{
      menu_url_info(){
        return this.$store.state.UI.menu_url_info;
      }
  },
  methods:{
    languageSwitchToggle(arg){
      //console.log(arg)
      if(arg=="close"){
        this.$data.languageSwitch=false;
      }else{
        this.$data.languageSwitch=!this.$data.languageSwitch
      }
    },
  }
}
</script>
<style scoped="scoped" lang="less">
  .AppHeadLeft{
    width: @AppNav_Width;
    height: @AppHead_Height;
    line-height: @AppHead_Height;
    background:@AppHead_Left_Backgournd;
    position: relative;
    z-index: 1;
    background-size: cover;
    color:@AppHead_Left_Text_color;
    text-align: center;
    font-size:@AppHead_Left_Text_Size;
    box-sizing: border-box;
  }
  .AppHeadRight{
    width:  calc(~"100% - @{AppNav_Width}");
    box-sizing: border-box;
    height: @AppHead_Height+1;
    background:@AppHead_Right_Backgournd;
    position: absolute;
    top:0;left:@AppNav_Width;
    border-bottom:@AppHead_Right_Border;
  }
  .AppHeadRight .menu_url_info{
    float: left;
    padding-left:20px;
    height:@AppHead_Height;
    line-height: @AppHead_Height;
  }
  .AppHeadRight .menu_url_info .a_disable{
    text-decoration: none;
    color:#aaa;
  }
  .AppHeadRight .menu_url_info .a_enable{
    text-decoration: none;
    color:@AppHead_Right_link_color;
  }
   .AppHeadRight .menu_url_info .line{
     color:#ccc;
   }
</style>
