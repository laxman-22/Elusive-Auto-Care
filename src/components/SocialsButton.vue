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
    width: 45px;
    height: 45px;
    vertical-align: middle;
}
</style>