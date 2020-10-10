<template>
 <div id="tab-bar-item" @click="itemClick">
   <div v-if="!isActive"><slot name="item-img"></slot></div>
   <div v-else><slot name="item-img-A"></slot></div>
   <div :style="activeStyle"><slot name="item-text"></slot></div>
   </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
          type:String,
          default:'black'
        }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
#tab-bar-item{
  flex: 1;
  text-align: center;
  height:49px ;
  font-size: 12px;
}
#tab-bar-item img{
  margin-top: 3px;
  height: 24px;
  width: 24px;
}
</style>