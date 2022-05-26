<template>
  <div id="app">
    <el-container>
      <el-header>
      </el-header>
      <el-container>
          <el-aside>
            <NavMenu></NavMenu>
          </el-aside>
          <el-main>
            <router-view></router-view> <!--路由出口 -->
          </el-main>
      </el-container>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
 
<script>
import NavMenu from "./components/NavMenu.vue";
 
export default {
  name: "app",
  components: {
    NavMenu
  }
};
</script>
 
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  padding: 0px;
}
 
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
 
</style>
