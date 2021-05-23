<style scoped>
body {
  /* background: #f5f7fa; */
  /* background: #262C49; */
  display: block;
}

.container {
  height: 100%;

  width: 2000px;
  background: #262c49;
}

.content {
  box-sizing: border-box;
  padding: 70px 20px 20px 220px;
  min-height: 1400px;
  overflow: auto;
}

.footer {
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  color: #999;
  display: block;
}
</style>
<template>
  <div class="container">
    <sidebar></sidebar>
    <!-- <navbar></navbar> -->
    <div class="content">
      <!-- <transition name="router-fade" mode="out-in">
                <router-view></router-view>
            </transition> -->
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Common/Sidebar";
// import Navbar from './Common/Navbar';

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  components: {
    sidebar: Sidebar,
    // 'navbar':Navbar,
  },
};
</script>
