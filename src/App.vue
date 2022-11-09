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
import MenuBar from './components/MenuBar.vue'


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

@media (max-width: 789px) {
    img#menu {
        width: 100%;
    }
}
@media (min-width: 792px) {
    img#menu {
        width: 100%;
    }
}
.navcontainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5%;
    background-color: black;
    position: fixed;
    overflow: hidden;
    width: 100%;
    top: 0 !important;
    z-index: 100;
    border-bottom: solid white 1px;
    transition: 0.4s;
}

#menu {
  max-height: 80px;
  max-width: 281.683px;
}


</style>
