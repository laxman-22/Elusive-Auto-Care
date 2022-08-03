<template>
    <div class="socialmedia">
        <SocialsButton @navigateToSocial="navToIg" class="btn" label="@elusiveautocare_" image="instagram_icon.png"/>
        <SocialsButton @navigateToSocial="navToFb" class="btn" label="@keepitelusive" image="Facebook_f_logo.png"/>
    </div>
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
.socialmedia {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn {
    margin: 1%;
    padding: 4%;
    background-color: transparent;
    border: none;
    font-size: 24px;   
    line-height: 50px; 
    position: relative;
    width: 300px;
}
.btn:hover {
    cursor: pointer;
}

</style>