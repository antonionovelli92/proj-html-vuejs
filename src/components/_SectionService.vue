<script>
import { listChessEdu } from '../data';
import { listService } from '../data';
import CreateCard from '../components/Generics/CreateCard.vue';
export default {
    name: 'SectionService',
    components: { CreateCard },
    data() {
        return { listChessEdu, listService }
    }
}
</script>

<template>
    <section id="service">
        <div class="container mt-5">
            <h2 class="text-center">OUR SERVICE</h2>
            <h6 class="text-center">We make your child happ day after day</h6>
            <div class="service-content d-flex">
                <div class="left-zone">
                    <h5>Chess Education</h5>
                    <h6>Popular education for you child amd you</h6>
                    <p>Teachers and parents around the world know that chess is not a simple game. It is a great
                        learning tool that will help build your child’s executive function skills.
                    </p>
                    <ul>
                        <li v-for="list in listChessEdu">{{ list }}</li>
                    </ul>

                </div>
                <div class="right-zone d-flex">
                    <create-card v-for="list in listService.chess" :image="list.image" :title="list.title"
                        :content="list.content"></create-card>

                </div>
            </div>
        </div>


    </section>

</template>

<style scoped lang="scss">
@use '../assets/sass/partials/variables' as*;

#service {
    h6 {
        font-weight: 200;
    }

    .left-zone {
        flex-basis: 30%;

        ul {
            margin-top: 70px;

            li {
                list-style-image: url("../assets/img/mt-2236-home-icon-bullet.png");
                font-size: 15px;
                padding-left: 10px;
            }
        }

    }

    .right-zone {
        flex-basis: 70%;
        flex-wrap: wrap;

        div {
            flex-basis: calc(100%/2);
        }
    }
}
</style>