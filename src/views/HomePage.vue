<template>
    <div class="left"> 
        <img style="margin-top: 5px;width: 100%; height: 62%; max-height: 62%; min-height: 50%" src="@/assets/bglogo.png">
        <div class="socials"> 
            <SocialsWrapper/>
        </div>
    </div> 
    <div class="right"> 
        <div class="About"> 
            <h2 style="margin: 10px; padding: 10px; font-weight: bold; font-size: 32px; color: white;">About</h2>
            <br/>
            <hr style="border: none; width: 95%; float: center; height: 1px; color: white; background-color: white; margin: auto;"/>
        </div>
        <div> 
            <p style="font-size: 18px; margin: 10px; padding: 20px; color: white; text-align: center">We are dedicated to providing the highest quality detailing services for your vehicles' needs.
            <br/>
            <br/>
            From the interior to the exterior, front to back, and even under the hood, we got you covered. 
            <br/>
            <br/>
            Check out our services page for more details!
            </p>
            <p style="text-align: center; font-size: 18px; margin: 10px; padding: 20px; color: white; text-align: center;">#KeepItElusive</p>
        </div>
        <div> 
            <h2 style="margin: 10px; padding: 10px; font-weight: bold; font-size: 32px; color: white">Gallery</h2>
            <hr style="border: none; width: 95%; float: center; height: 1px; color: white; background-color: white; margin: auto;"/>
        </div>
        <br/>
        <div class="galleryimgs"> 
            <img id="gallery" src="@/assets/galleryimg2.png"/>
            <img id="gallery" src="@/assets/galleryimg4.png"/>            
            <img id="gallery" src="@/assets/galleryimg3.png"/>
            <img id="gallery" src="@/assets/galleryimg1.png"/>
            <img id="gallery" src="@/assets/galleryimg5.png"/>
        </div>
    </div>
</template>

<script>
import SocialsWrapper from '@/components/SocialsWrapper'

export default {
    name: 'HomePage',
    components: {
        SocialsWrapper
    }
}
</script>

<style scoped>
.left {
    display: block;
    position: fixed;
    margin-top: 160px;
    height: 100%;
    width: 38%;
    background-color: black;
}
.socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    width: 100%;
    height: 8%;
}
.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 62%;
    height: 2000px;
    float: right;
    margin-top: 160px;
    background-color: black;
}
.galleryimgs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 100%;
}

#gallery {
    margin: 16px;
    max-width: 100%;
    max-height: 450px;
    border-radius: 15px;
}

</style>