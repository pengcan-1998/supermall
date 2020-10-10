<template>
  <div>
      <NavBar class="home-navbar"><div slot="center">商城</div></NavBar>
      <h2>首页</h2>
  </div>
</template>


<script>
import NavBar from "../../components/common/navbar/NavBar"

export default {
   name:'Home',
   components:{
     NavBar,
   }
}
</script>

<style>
.home-navbar{
  color: white;
  background-color:var(--color-tint);
}
</style>