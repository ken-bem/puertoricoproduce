<template>
  <div id="app" class="w-screen h-screen bg-gray-300 antialiased overflow-scroll">
    <Navbar />
    <div class="">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  import "./main.scss"
  import Navbar from "@/components/Navbar";
export default {
  name: 'app',
  components: {Navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
