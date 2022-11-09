<template>
    <div class="menu">
        <NavButton @navigate="navigateHome" label="Home"/>
        <NavButton @navigate="navigateBook" label="Book Now"/>
        <NavButton @navigate="navigateServices" label="Services"/>
        <NavButton @navigate="navigateContact" label="Contact Us"/>
    </div>
</template>

<script>
import NavButton from './NavButton'


export default{
    name: 'MenuBar',
    components: {
        NavButton,
    },
    methods: {
        navigateHome() {
            this.$router.push('/Home')
        },
        navigateBook() {
            this.$router.push('/BookNow')
        },
        navigateContact() {
            this.$router.push('/ContactUs')
        },
        navigateServices() {
            this.$router.push('/Services')
        }
    }
}
</script>

<style scoped>
.menu {
    width: 1000px;
    height: 20px;
    padding: auto;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-around;
    transition: 0.4s;
}
</style>
