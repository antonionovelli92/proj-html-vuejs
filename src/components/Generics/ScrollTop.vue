<script>
export default {
    name: 'ScrollTop',
}
</script>

<template>
    <button><a href="#">
            <img src="../../assets/img/mt-2236-home-icon-bullet.png" alt="">
        </a></button>
</template>

<style scoped lang="scss">
@use '../../assets/sass/partials/variables' as*;

button {
    z-index: 1;
    position: fixed;
    top: 70%;
    left: 0%;
    border-radius: 50%;
    padding: 8px 15px;
    font-size: 14px;
    background-color: transparent;
    text-align: center;

    a {
        text-decoration: none;
        text-align: center;
    }
}
</style>