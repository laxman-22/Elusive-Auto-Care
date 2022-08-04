<template>
    <div class="services">
        <h1>Services</h1>
        <p>*Online Booking Available Soon!</p>
        <h2 style="font-size: 28px">Interior Packages</h2>
        <div class="servicesimgs"> 
            <img src="../assets/basicinteriorpackage.png"/>
            <img src="../assets/premiuminteriorpackage.png"/>
        </div>
        <h2 style="font-size: 28px">Exterior Packages</h2>
        <div class="servicesimgs"> 
            <img src="../assets/basicexteriorpackage.png"/>
            <img src="../assets/premiumexteriorpackage.png"/>
        </div>
        <h2 style="font-size: 28px">Add-On Services</h2>
        <div class="servicesimgs"> 
            <img src="../assets/addonservices.png"/>
        </div>
        <p>#KeepItElusive</p>
    </div>
</template>

<script>

</script>

<style scoped>
.services {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 2500px;
    background-color: white;
}
.servicesimgs {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px;
}

img {
    margin: 30px;
    padding: auto;
    border-radius: 10px;
}
</style>