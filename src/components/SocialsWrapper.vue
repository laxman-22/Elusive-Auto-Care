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
    margin: 4%;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    height: 100%;   
    min-height: 1vw;
    max-width: 50%;
    max-height: 60%;
    width: 45%;
    background-color: black;
}
.btn:hover {
    cursor: pointer;
}

</style>