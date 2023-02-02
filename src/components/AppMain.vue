<script>
import SectionService from './_SectionService.vue';
import SectionPlay from './_SectionPlay.vue';
import SectionCourses from './_SectionCourses.vue';
export default {
    name: 'AppMain',
    components: { SectionService, SectionPlay, SectionCourses },
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
    </main>

</template>



<style lang="scss">

</style>