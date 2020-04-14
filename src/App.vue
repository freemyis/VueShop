<template>
  <div id="app">
    <button class="top"  @click="uptop">Top</button>
    <router-view />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'App',
  methods: {
    uptop(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top {
  position: fixed;
  width: 3rem;
  height: 3rem;
  top:80%;
  right: 5%;
  z-index: 10;
  border: 1px solid #eee;
  background-color: rgba(122, 76, 76, 0.5);
  color:white;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}
</style>
