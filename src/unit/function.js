/*
@function setTitle 用来设置标题
@params vueObject vue实例对象
@params separator 标题层级分隔符
*/
export const setTitle=function(vueObject,separator){
 
  let title='';
  document.title="正在加载..."
  let menuInfo=vueObject.$store.state.UI.menu_url_info;
  for(let i=0;i<menuInfo.length;i++){
    if(menuInfo[i]){
      if(menuInfo[i].meta){
        if(menuInfo[i].meta.navText){
          if(i>0&&menuInfo.length>1){
           title+=separator;
          }
         title+=vueObject.$t(menuInfo[i].meta.navText.toString())
        }
      }
    } 
  }
  document.title=title;
}