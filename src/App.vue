<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { getCurrentInstance } from "vue";
  const app = getCurrentInstance()
const onclick = () => {
  console.log("i clicked", app?.proxy)
 $search.show([{type: "type01", value: "value01", callback:() => {console.log("app.proxy.callback")}}])
}
</script>

<template>
  <img alt="Vite logo" width="120" src="./assets/vite.svg" />
  <img alt="Vue logo" width="120" src="./assets/logo.png" />
  <img alt="Electron logo" width="120" src="./assets/electron.png" />
  <img alt="TS logo" width="120" src="./assets/ts.png" />
  <HelloWorld msg="Vite + Vue 3 + Electron + TypeScript" />
  <button @click="onclick" >this is my button</button>
  <br />
  <p class="plugins">Plugins</p>
  <img alt="vue router logo" width="120" src="./assets/vueRouter.png" />
  <img alt="pinia logo" width="120" src="./assets/pinia.svg" />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin: 5px;
}
.plugins {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
