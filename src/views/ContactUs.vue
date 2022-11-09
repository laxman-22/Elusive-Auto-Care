<template>    
    <div class="pagelayout">
        <h1 style="color: white; text-align: center">Contact Us</h1> 
        <p style="color: white; text-align: center">
            <img class="icons" src="@/assets/envelope-solid.png"/>
            elusiveautocare@gmail.com
        </p>
        <p style="color: white; text-align: center">
            <img class="icons" src="@/assets/phone-solid.png"/>
            (647) - 525 - 2502
        </p>
        <p style="color: white; text-align: center">
            <img class="icons" src="@/assets/map-location-dot-solid.png"/>
            Halton Region
        </p>
        <div class="map">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370522.04242599895!2d-80.07994397523673!3d43.487658648180705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488e130228fc96fd%3A0x2dd2cd05272e3229!2sElusive%20Auto%20Care!5e0!3m2!1sen!2sca!4v1658967334435!5m2!1sen!2sca" width="600" height="450" style="border:0; outline: 2px solid lightgray" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <center>
            <p style="color: white; text-align: center">#KeepItElusive</p>
        </center>
    </div>
</template>

<style scoped>
.pagelayout {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin: auto;
    margin-top: 160px;
    width: 60%;
    height: 100vh;
    padding: 2%;
    background-color: black;
    border-radius: 40px 40px 40px 40px;
}
.map {
    margin: auto;
    width: 100%;
    outline-offset: 10px;
    border-radius: 1px;
}
.icons {
    filter: invert(1);
    max-width: 1em;
}

</style>

