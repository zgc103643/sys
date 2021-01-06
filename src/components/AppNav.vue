<template>
  <div id="AppNav">
    <div class="container">
      <ul class="parentUl" v-if="menu">
        <template v-for="(menuItem,key) in menu" >
              <li v-bind:key="key"  v-if="menuItem.meta&&menuItem.meta.navShow&&menuItem.meta.leftNav"  v-bind:class="menuItem.children?'parentNav':'parent'">
                <router-link  @click.native="navToggle({changekey:key,show:menuItem.meta.navChildShow,routerInfo:$route,childrenList:menuItem.children})" active-class="navActive" exact-active-class="navExactActive" v-bind:to="menuItem.path">
                  <img alt="" v-if="menuItem.meta.navIcon" v-bind:src="menuItem.meta.navIcon"/>
                  <span v-text="menuItem.meta.navText"></span>
                </router-link>
                <template v-show="menuItem.children">
                  <ul>
                     <template v-for="(childMenuItem,ckey) in menuItem.children" >
                         <li v-bind:key="ckey"  v-show="childMenuItem.meta&&childMenuItem.meta.navShow&&menuItem.meta.navChildShow">
                           <router-link  active-class="navActive" exact-active-class="navExactActive" v-bind:to="childMenuItem.path">
                             <img alt="" v-if="childMenuItem.meta.navIcon" v-bind:src="childMenuItem.meta.navIcon"/>
                             <span v-text="childMenuItem.meta.navText"></span>
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
export default {
  data(){
    return {
    }
  },
  created(){
  },
  computed:{
      menu(){
        return this.$store.state.UI.menu;
      }
  },
  methods:{
    navToggle(data){
      this.$store.commit("UI_menu_click_toggle",data);
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
  

</style>
