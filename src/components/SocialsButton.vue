<template>
    <button class="button" @click="$emit('navigateToSocial')"><img :src="require('../assets/' + image)"></button>
</template>

<script>
export default {
    name: 'SocialsButton',
    props: {
        url: String,
        image: String,
    },
}
</script>

<style scoped>
img {
    max-height: 60px;
    max-width: 60px;
    background-color: none;
    filter: invert(1);
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>