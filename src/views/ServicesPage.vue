<template>
    <div class="services">
        <h1>Services</h1>
        <p>*Online Booking Available Soon!</p>
        <h2 style="font-size: 28px">Interior Packages</h2>
        <hr style="border: none; width: 50%; float: center; height: 1px; color: white; background-color: white; margin: auto;" />
        <div class="servicesimgs"> 
            <img src="../assets/basicinteriorpackage.png"/>
            <img src="../assets/premiuminteriorpackage.png"/>
        </div>
        <h2 style="font-size: 28px">Exterior Packages</h2>
        <hr style="border: none; width: 50%; float: center; height: 1px; color: white; background-color: white; margin: auto;" />
        <div class="servicesimgs"> 
            <img src="../assets/basicexteriorpackage.png"/>
            <img src="../assets/premiumexteriorpackage.png"/>
        </div>
        <h2 style="font-size: 28px">Add-On Services</h2>
        <hr style="border: none; width: 50%; float: center; height: 1px; color: white; background-color: white; margin: auto;" />
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
    margin-top: 160px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 2500px;
    background-color: black;
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
    border: solid white;
}
h1 {
    color: white;
}
h2 {
    color: white;
}
p {
    color: white;
}
</style>