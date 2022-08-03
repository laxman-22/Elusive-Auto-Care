<template>
  <div class="navcontainer">
    <img id="menu" src="./assets/logo.jpg">
    <MenuBar/>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@300&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
  margin: auto;
  background-color: black;
  min-height: 100vh;
}
.navcontainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5%;
    background-color: black;
    position: sticky;
    top: 0;
    z-index: 100;
}

#menu {
  max-height: 100px;
  max-width: 281.683px;
}


</style>
