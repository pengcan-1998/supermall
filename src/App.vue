<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
    <TabBarItem path="/home" activeColor="">
      <img slot="item-img" src="./assets/img/home.svg" alt="">
      <img slot="item-img-A" src="./assets/img/Ahome.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="">
       <img slot="item-img" src="./assets/img/leibie.svg" alt="">
       <img slot="item-img-A" src="./assets/img/Aleibie.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcar"  activeColor="">
       <img slot="item-img" src="./assets/img/shopcar.svg" alt="">
       <img slot="item-img-A" src="./assets/img/Ashopcar.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/me"  activeColor="">
       <img slot="item-img" src="./assets/img/me.svg" alt="">
       <img slot="item-img-A" src="./assets/img/Ame.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>  
  </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar"
import TabBarItem from "./components/common/tabbar/TabBarItem" ; 

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,

  }
}
</script>

<style>
    @import "assets/css/base.css";
</style>
