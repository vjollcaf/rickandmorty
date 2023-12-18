<template>
  <div class="container">
    <img alt="Vue logo" src="https://i.pinimg.com/564x/94/bc/e8/94bce8115ad1083d1505eb050b0e8921.jpg" />
    <HelloWorld msg="Wubba lubba dub-dub" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
