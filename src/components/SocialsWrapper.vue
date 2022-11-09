<template>
    <SocialsButton @navigateToSocial="navToIg" class="btn" image="instagram-brands.png"/>
    <SocialsButton @navigateToSocial="navToFb" class="btn" image="facebook-brands.png"/>
</template>

<script>
import SocialsButton from '../components/SocialsButton'

export default {
    name: 'SocialsWrapper',
    components: {
        SocialsButton
    },
    methods: {
        navToIg() {
            window.open('https://www.instagram.com/elusiveautocare_');
        },
        navToFb() {
            window.open('https://www.facebook.com/keepitelusive');
        }
    }
}
</script>

<style scoped>
.btn {
    margin: 45px;
    background-color: transparent;
    border: none;
    height: 100%;   
    min-height: 8%;
    max-width: 70%;
    max-height: 95%;
    width: 10%;
    background-color: none;
}
.btn:hover {
    cursor: pointer;
}

</style>