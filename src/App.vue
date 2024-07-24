<template>
  <div id="app">
    <HomeTask></HomeTask>
  </div>
</template>

<script>
import HomeTask from "./components/HomeTask.vue";

export default {
  name: "Todo List APP",
  components: {
    HomeTask,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
