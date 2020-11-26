<template>
  <div id="AppNav">
    <div class="container">
      <ul class="parentUl" v-if="menu">
        <template v-for="(menuItem,key) in menu" >
              <li v-bind:key="key"  v-if="menuItem.meta&&menuItem.meta.navShow&&menuItem.meta.leftNav"  v-bind:class="menuItem.children?'parentNav':''">
                <router-link  @click.self.native="navToggle({changekey:key,show:menuItem.meta.navChildShow,routerInfo:$route,childrenList:menuItem.children})" active-class="navActive" exact-active-class="navExactActive" v-bind:to="menuItem.path" v-text="menuItem.meta.navText"></router-link>
                <template v-if="menuItem.children">
                  <ul>
                     <template v-for="(childMenuItem,key) in menuItem.children" >
                         <li v-bind:key="key"  v-if="childMenuItem.meta&&childMenuItem.meta.navShow&&menuItem.meta.navChildShow">
                           <router-link  active-class="navActive" exact-active-class="navExactActive" v-bind:to="childMenuItem.path" v-text="childMenuItem.meta.navText"></router-link>
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
    //this.$set("menu",this.$store.state.UI.menu[0].children)
    //this.$data.menu.push(...this.$store.state.UI.menu[0].children);
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
  @import url("@/assets/theme.less");
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
    font-weight: bold;
    border-left:@AppNav_link_navActive_color 2px solid !important;
    background-color: none;
  }
  .navExactActive{
    background: @AppNav_link_navActive_color;
    border-left:0 !important;
  }
  .parentNav .navExactActive{
    background: @AppNav_link_navActive_color;
    border-left:0 !important;
  }
  .parentNav>a{
    background: url('../assets/right.svg') no-repeat center right+20px;
  }
  .parentNav>a.navActive{
    background: url('../assets/unfold.svg') no-repeat center right+20px;
  }
  

</style>
