<template>
  <div class="right-box">
    <div class="navbar">
      <div class="menu">
        <div class="menu-item">
          <i class="el-icon-house" @click="backhome"></i>
        </div>
        <div class="menu-item">
          <i class="el-icon-user" @click="logout"></i>
        </div>
        <div class="menu-item">
          <i
            class="el-icon-caret-top"
            @click="onTopping"
            id="onTop"
            ref="onTop"
          ></i>
        </div>
        <div class="menu-item">
          <i class="el-icon-minus" @click="minimizeWin"></i>
          <!-- <el-button type="primary" size="mini" icon="el-icon-minus" circle @click="minimizeWin"></el-button> -->
        </div>
        <div class="menu-item">
          <i class="el-icon-plus" @click="maximizeWin"></i>
          <!-- <el-button type="primary" size="mini" icon="el-icon-minus" circle @click="maximizeWin"></el-button> -->
        </div>
        <div class="menu-item">
          <i class="el-icon-close" @click="closeWin"></i>
          <!-- <el-button type="primary" size="mini" icon="el-icon-minus" circle @click="closeWin"></el-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import { getCurrentInstance, defineComponent, onMounted } from "vue";
ipcRenderer.on("is_top", function (event, message) {
  document.querySelector("#onTop").className = "el-icon-caret-bottom";
});
ipcRenderer.on("not_top", function (event, message) {
  document.querySelector("#onTop").className = "el-icon-caret-top";
});
export default {
  data() {
    return {};
  },
  name: "Header",
  setup() {
    const { ctx, proxy } = getCurrentInstance();
    function minimizeWin() {
      ipcRenderer.send("window-min"); // 窗口最小化
    }
    function maximizeWin() {
      ipcRenderer.send("window-max");
    }
    function closeWin() {
      ipcRenderer.send("window-closed");
    }
    function onTopping() {
      ipcRenderer.send("window-ontop");
    }
    function backhome() {
      ctx.$router.replace("/home");
    }
    function logout() {
      if (
        localStorage.getItem("ins_toolkit_token") &&
        localStorage.getItem("ins_toolkit_token") != ""
      ) {
        ctx
          .$confirm("是否要退出?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
          .then(() => {
            localStorage.removeItem("ins_toolkit_token");
            ctx.$router.replace({ name: "login" });
          });
      }
    }
    return {
      maximizeWin,
      minimizeWin,
      closeWin,
      onTopping,
      logout,
      backhome,
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  height: 50px;
  background: #2e3245;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
}
.navbar .menu {
  flex: 1;
  margin-top: 15px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  -webkit-app-region: drag;
}

.navbar .menu-item {
  margin: 0 15px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  -webkit-app-region: no-drag;
}
.right-box {
  /* background: #323957; */
  height: 60px;
  display: block;
  /* position: fixed; */
  /* top: 0; */
  left: 200px;
  z-index: 999;
  float: left;
  width: calc(100%);
  overflow: hidden;
  -webkit-app-region: drag;
}

.logo {
  width: 60px;
}
</style>
