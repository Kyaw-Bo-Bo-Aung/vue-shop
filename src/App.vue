<template>
  <div>
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import MenuBar from "./components/MenuBar"


export default {
  name: "App",
  components: { MenuBar },
  
}
</script>

<style>
	
.p-loader-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}	
</style>