<script>
import SectionService from './_SectionService.vue';
import SectionPlay from './_SectionPlay.vue';
import SectionCourses from './_SectionCourses.vue';
import SectionFirst from './_SectionFirst.vue';
import SectionEvents from './_SectionEvents.vue';
export default {
    name: 'AppMain',
    components: { SectionService, SectionPlay, SectionCourses, SectionFirst, SectionEvents },
    data() {
        return
    }
}
</script>


<template>
    <main>
        <section-service></section-service>
        <section-play></section-play>
        <section-courses></section-courses>
        <section-first></section-first>
        <section-events></section-events>
    </main>

</template>



<style lang="scss">

</style>