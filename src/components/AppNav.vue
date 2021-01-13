<template>
  <div id="AppNav">
    <div class="container">
      <ul class="parentUl" v-if="menu"  v-cloak>
        <template v-for="(menuItem,key) in menu" >
              <li v-bind:key="key"  v-if="menuItem.meta&&menuItem.meta.navShow"  v-bind:class="menuItem.children?'parentNav':'parent'">
                <router-link  @click.native="navToggle(key)" v-bind:class="currentToggel?'slideUp':''" active-class="navActive" exact-active-class="navExactActive" v-bind:to="menuItem.path">
                  <img alt="" v-if="menuItem.meta.navIcon" v-bind:src="menuItem.meta.navIcon"/>
                  <span v-text="$t(menuItem.meta.navText)"></span>
                </router-link>
                <template v-if="menuItem.children">
                  <ul>
                     <template v-for="(childMenuItem,ckey) in menuItem.children" >
                         <li v-bind:key="ckey" v-if="childMenuItem.meta&&childMenuItem.meta.navShow"  v-cloak>
                           <router-link  active-class="navActive" exact-active-class="navExactActive" v-bind:to="childMenuItem.path">
                             <img alt="" v-if="childMenuItem.meta.navIcon" v-bind:src="childMenuItem.meta.navIcon"/>
                             <span v-text="$t(childMenuItem.meta.navText)"></span>
                           </router-link>
                         </li>
                     </template>
                  </ul>
                </template>
              </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import routers from "../router/router.onfig";
export default {
  data(){
    return {
      menuNameList:['Index','About','Test',"User"],
      currentToggel:false,
      currentKey:0
    }
  },
  mounted(){
    //初始化设置：currentKey的值，在页面刷新的时候 得到当前的导航key值
    for(let i=0;i<this.menu.length;i++){
      if(this.menu[i].path===`${this.$route.matched[1].path}`){
        this.$data.currentKey=i.toString();
        break;
      }
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
          menu=menu.filter((v)=>{
            return this.$data.menuNameList.indexOf(v.name)!==-1;
          });
          //一级菜单进行排序（从小到大）
          menu.sort((a,b)=>a.meta.navSort - b.meta.navSort);
          //二级菜单进行排序（从小到大）
          for(let i=0;i<menu.length;i++){
            if(menu[i].children){
              let menuChild=Array.from(menu[i].children);
              menuChild.sort((a,b)=>a.meta.navSort - b.meta.navSort);
              menu[i].children=menuChild;
            }else{
              continue
            }
          }
        }else{
          //如果没有就显示为空
          menu=null;
        }
        //console.log(menu)
        return menu;
      }
  },
  methods:{
    navToggle(key){
      if(this.$data.currentKey===key.toString()){
        //如果点击的是同一个导航，则key值相同，所以 让currentToggel的值在true和false之间来回切换
        this.$data.currentToggel=!this.$data.currentToggel;
      }else{
        //如果点击的不是同一导航，则key值不同，所以 让currentToggel恢复默认的false值
        this.$data.currentToggel=false;
      }
      //每次点击都要存key值 这currentKey 拥有判断前一次和当前的可以key值是否相同
      this.$data.currentKey=key.toString();
    }
  }
}
</script>
<style lang="less" scoped>
  .container{
    margin-right: -18px;
    height: 100%;
    overflow:auto;
  }
  li ul{
    display: none;
  }
  .navActive+ul{
    display: block;
  }
  .navActive{
    background: @AppNav_link_navActive_color;
    border-left:0 !important;
    color:white !important;
  }
  .parentNav .navActive{
    color:white !important;
    border-left:@AppNav_link_navActive_color 2px solid !important;
    background-color: transparent;
  }
  .navExactActive{
    background: @AppNav_link_navActive_color;
    border-left:2px solid transparent !important;
  }
  .parentNav .navExactActive{
    background: @AppNav_link_navActive_color;
    border-left:2px solid transparent !important;
  }
  .parentNav>a{
    background: url('../assets/right.svg') no-repeat center right+20px;
  }
  .parentNav a img,.parent a img{ width: 18px;vertical-align: middle;margin-right:5px;}
  .parentNav a span,.parent a span{vertical-align: middle}
  .parentNav>a.navActive{
    background: url('../assets/unfold.svg') no-repeat center right+20px;
  }
  .parentNav>a.slideUp{
      background: url('../assets/right.svg') no-repeat center right+20px;
  }
  .parentNav>a.slideUp+ul{
    display: none;
  }
  [v-cloak]{
    display: none;
  }

</style>
