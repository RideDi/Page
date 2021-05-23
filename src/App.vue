<template>
  <div id="app">
    <v-Header id="v-Header"></v-Header>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from "./views/Login.vue";
import Header from "./components/Common/Header.vue";
export default {
  name: "App",
  components: {
    "v-Header": Header,
  },
  provide() {
    return {
      root: this,
    };
  },
};
</script>

<style>
.content {
  width: auto;
}
body {
  margin: 0;
}
.v-Header {
  z-index: 999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffff;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 7px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
</style>
