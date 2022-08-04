<template>
    <div class="wrap">
        <div class="left">
            <img id="background" src="../assets/bglogo.png">
        </div>
    
        <div class="center">
            <div> 
              <h2>About</h2>
            </div>
        </div>
        <div class="right">
            <div class="socialwrap">
                <div class="socials">
                    <h2>Join The Club</h2>
                    <Socials-wrapper/>
                </div>
            </div>
        </div>
  </div>

</template>

<script>
import SocialsWrapper from '../components/SocialsWrapper'
export default {
    name: 'HomePage',
    components: {
        SocialsWrapper,
    }
}
</script>

<style scoped>
.wrap {
  display: flex;
  width: 100%;
  flex-direction: row;
}
.left {
  flex: 1;
  height: 100vh;
  background-color: black;
}
.right {
  flex: 1.1;  
  height: 100vh;
  background-color: black;
  width: 100%;
  z-index: 99;
}
.center {
  flex: 1.3;
  height: 100vh;
  width: auto;
  padding: 2%;
  background-color: white;
  box-shadow: -12px 12px 22px 0 #000000;
  z-index: 99;
  border-radius: 40px 40px 40px 40px;
}
.socialwrap {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.socials {
    flex: 0.35;
    height: 33%;
    padding: 1%;
    width: 90%;
    text-align: center;
    border-radius: 10px;
    background-color: white;
}

#background {
  max-width: 150%;
  margin-top: 5%;
  margin-left: 69px;
  position: fixed;
  top: 100;
  z-index: 0;
}
</style>
