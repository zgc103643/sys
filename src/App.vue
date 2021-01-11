<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  
}
</script>
<style lang="less">
html,body,#app{
  margin:0;
  height:100%;
  width: 100%;
}
h1,h2,h3,h4,h5,p{
  margin:0;
}
a{
  text-decoration: none;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
</style>
