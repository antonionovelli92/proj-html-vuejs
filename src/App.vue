<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'Chess',
    components: { AppHeader, AppMain, AppFooter },
    data() {

    }
}
</script>


<template>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>

    <p>CIAO</p>
</template>



<style lang="scss">
@use "./assets/sass/partials/variables" as*;
@use "./assets/sass/style.scss";

p {
    color: $yellow;
}
</style>