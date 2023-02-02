<script>
import SectionService from './_SectionService.vue';
import SectionPlay from './_SectionPlay.vue';
import SectionCourses from './_SectionCourses.vue';
import SectionFirst from './_SectionFirst.vue';
export default {
    name: 'AppMain',
    components: { SectionService, SectionPlay, SectionCourses, SectionFirst },
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
    </main>

</template>



<style lang="scss">

</style>