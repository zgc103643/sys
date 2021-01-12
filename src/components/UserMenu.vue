<template>
  <div class="userMenu" @click="$emit('userMenuSwitchToggle','default')">
    <span class="icon" v-html="userMenuIcon" ></span>
    <span class="txt" v-text="userMenuText"></span>
    <ul v-if="userMenuSwitch" class="menu_box">
      <li v-for="(item,key) in userMenulist" v-bind:key="key"  v-bind:class="{active:userMenuText===$t(item.meta.navText),menu_box_first_child:key===0,menu_box_last_child:userMenulist.length===key+1}">
        <span class="icon"  v-bind:style="{background:`url(${item.meta.navIcon}) no-repeat center/18px 14px`}"></span>
        <span class="txt" v-text="$t(item.meta.navText)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
  props:["userMenuSwitch"],
  data(){
    return {
      userMenuText:"用户设置",
      userMenuIcon:"<i class='iconfont icon-yonghu'></i>",
      userMenulist:[
        {path:"/index/add1",meta:{requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:3,leftNav:true}},
        {path:"/index/add2",meta:{requiresAuth:false,navShow:true,navText:'A.a2',navIcon:require("../assets/shezhi.svg"),navSort:3,leftNav:true}},
        {path:"/index/add3",meta:{requiresAuth:false,navShow:true,navText:'A.a3',navIcon:require("../assets/shezhi.svg"),navSort:3,leftNav:true}}
      ]
    }
  },
  computed:{
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