<template>
    <SocialsButton @navigateToSocial="navToIg" class="btn" label="@elusiveautocare_" image="instagram_icon.png"/>
    <SocialsButton @navigateToSocial="navToFb" class="btn" label="@keepitelusive" image="Facebook_f_logo.png"/>
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
    margin: auto;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    height: 100%;   
    min-height: 5%;
    max-width: 60%;
    max-height: 50%;
    width: 30%;
    background-color: black;
}
.btn:hover {
    cursor: pointer;
}

</style>