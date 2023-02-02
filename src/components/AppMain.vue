<script>
import SectionService from './Section/_SectionService.vue';
import SectionPlay from './Section/_SectionPlay.vue';
import SectionCourses from './Section/_SectionCourses.vue';
import SectionFirst from './Section/_SectionFirst.vue';
import SectionEvents from './Section/_SectionEvents.vue';
import SectionNews from './Section/_SectionNews.vue';
export default {
    name: 'AppMain',
    components: { SectionService, SectionPlay, SectionCourses, SectionFirst, SectionEvents, SectionNews },
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
        <section-news></section-news>
    </main>

</template>



<style lang="scss">

</style>