<template>
  <div id="AppHead">
     <div class="AppHeadLeft">LOGO</div>
     <div class="AppHeadRight"></div>
  </div>
</template>
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
    font-size:@AppHead_Left_Text_Size ;
  }
  .AppHeadRight{
    padding-left: @AppNav_Width;
    width: 100%;
    box-sizing: border-box;
    height: @AppHead_Height;
    background:@AppHead_Right_Backgournd;
    position: absolute;
    top:0;left:0;
  }
</style>
