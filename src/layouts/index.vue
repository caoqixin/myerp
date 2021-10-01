
<template>
  <el-container>
    <NavBar />

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-avatar> user </el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>
