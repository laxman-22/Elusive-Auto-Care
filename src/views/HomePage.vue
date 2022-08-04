<template>
    <div class="wrap">
        <div class="left">
            <img id="background" src="../assets/bglogo.png">
        </div>
    
        <div class="center">
            <div class="About"> 
              <h2 style="margin: 10px; padding: 10px; font-weight: bold; font-size: 32px;">About</h2>
              <br/>
              <hr style="border: none; width: 95%; float: center; height: 1px; color: gray; background-color: black; margin: auto;"/>
            </div>
            <div> 
              <p style="font-size: 18px; margin: 10px; padding: 20px">We are dedicated to providing the highest quality detailing services for your vehicles' needs.
                <br/>
                <br/>
                From the interior to the exterior, front to back, and even under the hood, we got you covered. 
                <br/>
                <br/>
                Check out our services page for more details!
              </p>
              <p style="text-align: center; font-size: 18px; margin: 10px; padding: 20px">#KeepItElusive</p>
            </div>
            <div> 
              <h2 style="margin: 10px; padding: 10px; font-weight: bold; font-size: 32px; ">Gallery</h2>
              <hr style="border: none; width: 95%; float: center; height: 1px; color: gray; background-color: black; margin: auto;"/>
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
  height: 1200px;
}
.About {
  width: 100%;
}
.left {
  flex: 1;
  height: 100%;
  background-color: black;
}
.right {
  flex: 1.1;  
  height: 100%;
  background-color: black;
  width: 100%;
  z-index: 99;
}
.center {
  flex: 1.3;
  height: 100%;
  width: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 319.583px;
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
