<template>
  <div id="AppHead">
     <div class="AppHeadLeft">LOGO</div>
     <div class="AppHeadRight"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted() {
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
</style>
