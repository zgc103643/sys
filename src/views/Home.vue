<template>
  <div class="home">
    <AppHead/>
    <AppNav/>
    <AppMain/>
  </div>
</template>
<script>
import AppHead from '@/components/AppHead.vue';
import AppNav from '@/components/AppNav.vue';
import AppMain from '@/components/AppMain.vue';
export default {
  components: {
    AppHead,
    AppNav,
    AppMain
  },
  mounted(){
    //console.log(this.$route)
  }
}
</script>
<style lang="less">
@import url("@/assets/theme.less");
#AppHead{
  width: 100%;
  height: @AppHead_Height;
  background: rgb(189, 190, 190);
  position: absolute;
  left:0;top:0;
  z-index: 1;
}
#AppNav{
  background: @AppNav_Backgournd;
  width: @AppNav_Width;
  height:100%;
  padding-top: @AppHead_Height;
  float: left;
  box-sizing: border-box;
  position: absolute;
  left:0;top:0;
  overflow: hidden;
  color: @AppNav_text_color;
  text-align: left;
}
#AppNav a{
  color: @AppNav_link_color;
  text-decoration: none;
  display: block;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
}
#AppNav li ul a{
  padding-left: 40px;
}
#AppNav ul{
  padding-left: 0px;
  list-style: none;
  line-height: 38px;
}
#AppNav .parentUl{
  margin-right: 18px;
}
#AppMain{
  //background: rgb(238, 252, 255);
  width:100%;
  height:100%;
  padding-top:@AppHead_Height;
  padding-left:@AppNav_Width;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
}
</style>

