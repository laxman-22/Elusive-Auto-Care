<template>
    <button @click="$emit('navigate')" class="NavButton">{{label}}</button>
</template>

<script>

export default {
    name: 'NavButton',
    props: {
        label: String
    },
    methods: {
        navigate() {
            console.log("clicked")
        }
    }
}
</script>

<style scoped>
.NavButton {
    color: white;
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    height: 28px;
    outline: none;
}
.NavButton:hover {
    color: white;
    text-shadow: -0.3px 0 white, 0 0.3px white, 0.3px 0 white, 0 -0.3px white;
    cursor: pointer;
}
</style>