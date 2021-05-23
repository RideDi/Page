<template>
  <div class="left-box">
    <div class="logo">
      <img src="../../assets/instoolkit.png" />
    </div>
    <el-menu
      class="sidebar"
      :unique-opened="true"
      :default-active="currentPagePath"
      @open="handleOpen"
      :router="true"
      style="font-weight: bold"
      theme="dark"
      background-color="#2e3245"
      @close="handleClose"
      text-color="#ece3d4"
      active-text-color="#ffd04b"
      border-right="0"
    >
      <el-menu-item index="/home">
        <i class="el-icon-odometer"></i>
        <span>主页</span>
      </el-menu-item>
      <el-submenu index="public_opinion" style="font-weight: lighter">
        <template #title>
          <i class="el-icon-monitor"></i>
          <span style="font-weight: bold">舆情监控</span>
        </template>
        <el-menu-item index="/dashboard/public_opinion">
          <i class="el-icon-film"></i>
          <span>可视监控</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/public_opinion/mode_intro">
          <i class="el-icon-guide"></i>
          <span>监控模式</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/public_opinion/createtask">
          <i class="el-icon-files"></i>
          <span>新建任务</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/public_opinion/history_task">
          <i class="el-icon-notebook-2"></i>
          <span>历史任务</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="crawl">
        <template #title>
          <i class="el-icon-view"></i>
          <span>信息爬取</span>
        </template>
        <el-menu-item index="/dashboard/crwal">
          <i class="el-icon-guide"></i>
          <span>模式选择</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/crwal/user">
          <i class="el-icon-user"></i>
          <span>用户爬取</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/crwal/group">
          <i class="el-icon-s-custom"></i>
          <span>社群爬取</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="account_check">
        <template #title>
          <i class="el-icon-search"></i>
          <span>账户检测</span>
        </template>
        <el-menu-item index="/dashboard/account_check">
          <i class="el-icon-files"></i>
          <span>新建任务</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/account_check_view">
          <i class="el-icon-film"></i>
          <span>可视结果</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/account_check/history_task">
          <i class="el-icon-notebook-1"></i>
          <span>历史查询</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="user">
        <template #title>
          <i class="el-icon-user"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/dashboard/user">
          <i class="el-icon-files"></i>
          <span>账号管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="result">
        <template #title>
          <i class="el-icon-edit-outline"></i>
          <span>结果报告</span>
        </template>
        <el-menu-item index="5-1">
          <i class="el-icon-files"></i>
          <span>生成报告</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPagePath: "/home",
    };
  },
  setup() {
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    // function hasOwn() {
    // }
    return {
      handleOpen,
      handleClose,
      // hasOwn
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>
<style>
.left-box {
  width: 200px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  float: left;
  flex-direction: column;
  background: #2e3245;
}
el-submenu {
  border: none;
}
el-menu-item {
  border: none;
  background-color: #42b983;
}
.left-box .sidebar {
  width: 200px;
  flex: 1;
  border-radius: 0;
}

.left-box .fa {
  margin-right: 10px;
  font-size: 18px;
}

.left-box .el-submenu .el-menu-item .fa {
  margin-right: 10px;
  font-size: 10px;
  background-color: #3c37ba;
}

.left-box .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 200px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.left-box .logo img {
  height: 120px;
}
</style>
