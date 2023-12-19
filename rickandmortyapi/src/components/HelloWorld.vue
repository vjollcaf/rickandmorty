<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="nav">
      <li><a href="http://">Characters</a></li>
      <li><a href="http://">Locations</a></li>
      <li><a href="http://">Locations</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
