<template>
    <button @click="$emit('navigateToSocial')"><img :src="require('../assets/' + image)">{{label}}</button>
</template>

<script>
export default {
    name: 'SocialsButton',
    props: {
        label: String,
        url: String,
        image: String,
    },
}
</script>

<style scoped>
img {
    margin: auto;
    padding: 2%;
    width: auto;
    height: auto;
    min-height: 15px;
    min-width: 15px;
    max-height: 60%;
    max-width: 60%;
    vertical-align: middle;
    background-position: center center;
    background-size: cover;
}
</style>