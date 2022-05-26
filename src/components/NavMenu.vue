<template>
  <div id="NavMenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      @select="handleSelect"
      router
    >
   
      <template v-for="item in navMenuData" :key="item.name">
      <el-sub-menu>
          <template #title><i class="el-icon-lx-home"></i><span>{{item.name}}</span></template>
          <el-menu-item-group>
          <template v-for="methodItem in item.methods" :key="methodItem.key">
            <el-menu-item :index="methodItem.index">{{methodItem.name}}</el-menu-item>
          </template>
          </el-menu-item-group>
      </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
 
<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "method",     
    };
  },
  computed:{
    navMenuData:function(){
      return gNavMenuData
    },
    methodMap:function(){
      return gMethodMap
    }
  },
  methods: {
    handleSelect(key, keyPath,routeResult) {
      console.log(key, keyPath,routeResult);
    
    },
    handleOpen(key, keyPath){
      console.log("onMenuItemClick:"+key)
    },
    handleClose(key, keyPath){
      console.log("onMenuItemClose:"+key)
    },
  },
  mounted(){         
      console.log(this.activeIndex)        
      console.log(this.$route.path)      
      console.log(this.navMenuData)
      this.activeIndex = this.$route.path.substring(1,this.$route.path.length);     
 
  }
};
</script>
 
<style scoped>
</style>