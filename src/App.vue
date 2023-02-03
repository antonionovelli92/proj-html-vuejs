<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ScrollTop from './components/generics/ScrollTop.vue';
export default {
    name: 'Chess',
    components: { AppHeader, AppMain, AppFooter, ScrollTop },
    data() {

    }
}
</script>


<template>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
    <scroll-top></scroll-top>
</template>



<style lang="scss">
@use "./assets/sass/partials/variables" as*;
@use "./assets/sass/style.scss";
</style>