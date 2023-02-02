<script>
import { listCourses } from '../data';
import CreateCard from './Generics/CreateCard.vue';
export default {
    name: 'SectionCourses',
    components: { CreateCard },
    data() {
        return { listCourses }
    }

}
</script>


<template>
    <section id="courses">
        <div class="container mb-5">
            <div class="content  text-center mt-5">
                <h2>Courses</h2>
                <h6>To Keep up with the constantly rising standards of play</h6>
            </div>
            <div class="content-cards d-flex justify-content-center">
                <create-card v-for="course in listCourses.course" :image="course.image" :title="course.title"
                    :content="course.content" :other="course.price" class="shadow mt-3">
                </create-card>
            </div>
            <div class="d-flex justify-content-center my-5">
                <button>iksjbjkd</button>

            </div>
        </div>


    </section>

</template>


<style scoped lang="scss">
.content {
    h6 {
        font-weight: 200;
    }
}

.card-generic {
    padding: 0 3px;
    transition: transform 250ms;
    margin: 0 5px;
    text-align: center;

    h5 {

        margin: 1.5rem 0;
        color: green;

    }

    h6 {
        margin-top: 1rem;
    }

    &:hover {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.537);
        transform: translateY(-10px);
        cursor: pointer;
    }

    button {}



}
</style>