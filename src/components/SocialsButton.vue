<template>
    <button class="button" @click="$emit('navigateToSocial')"><img :src="require('../assets/' + image)">{{label}}</button>
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
    padding-right: 2%;
    min-height: 15px;
    min-width: 15px;
    max-height: 36px;
    max-width: 36px;
    vertical-align: middle;
    background-position: center center;
}
.button {
    color: white;
}
</style>