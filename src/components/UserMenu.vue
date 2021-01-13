<template>
  <div class="userMenu" @click="$emit('userMenuSwitchToggle','default')">
    <span class="icon" v-html="userMenuIcon" ></span>
    <span class="txt" v-text="userMenuText"></span>
    <ul v-if="userMenuSwitch" class="menu_box">
      <li v-for="(item,key) in menu" v-bind:key="key"  v-bind:class="{menu_box_first_child:key===0,menu_box_last_child:menu.length===key+1}">
        <router-link v-bind:to="item.path" active-class="active">
        <span class="txt" v-text="$t(item.meta.navText)"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routers from "../router/router.onfig";
export default {
  name: "UserMenu",
  props:["userMenuSwitch"],
  data(){
    return {
      userMenuText:"用户设置",
      userMenuActiveIndex:0,
      userMenuIcon:"<i class='iconfont icon-yonghu'></i>",
    }
  },
  computed:{
    menu(){
      //获取导航的顶级目录
      let menu=routers.filter(v=>v.name==='Home');
      if(menu.length>0){
        //获取顶级目录的菜单
        menu=Array.from(menu[0].children);
        //筛选出左侧要显示的菜单
        menu=menu.filter(v=>v.name==='User');
        //二级菜单进行排序（从小到大）
          if(menu[0].children){
            let menuChild=Array.from(menu[0].children);
            menuChild.sort((a,b)=>a.meta.navSort - b.meta.navSort);
            menu=menuChild
          }
      }else{
        //如果没有就显示为空
        menu=[];
      }
      //console.log(menu)
      return menu;
    }
  },
  methods:{
  },
  //建议放到组件里面，比较方便代码复用
  beforeMount() {
    this._close = e => {
      // 如果点击发生在当前组件内部，则不处理
      if (this.$el.contains(e.target)) {
        return;
      }
      this.$emit('userMenuSwitchToggle',"close");
    };
    document.body.addEventListener('click', this._close);

  },
  beforeDestroy() {
    document.body.removeEventListener('click', this._close);
  }
}
</script>

<style scoped lang="less">
.userMenu{
  height:@AppHead_Height;
  line-height: @AppHead_Height;
  float: right;
  margin-right:20px;
  position: relative;
  cursor: pointer;
  padding:@AppHead_Right_Btn_Padding;
}
.userMenu ul{
  position: absolute;
  background: #ffffff;
  right:-1px;
  top:@AppHead_Height+5;
  line-height: normal;
  border:1px solid @menu_box_border_color;
  white-space: nowrap;
}
.userMenu ul li{
  white-space: nowrap;
  overflow: hidden;
}
.userMenu ul li a{
  display: block;
  padding:0 10px;
}
.userMenu .icon{
  display: inline-block;
  width: 18px; height: @AppHead_Height - 20;
  line-height: @AppHead_Height - 20;
  vertical-align: middle;
  margin-right: 5px;
}
.userMenu .txt{
  height: @AppHead_Height - 20;
  line-height: @AppHead_Height - 20;
  display: inline-block;
  vertical-align: middle;
}
</style>