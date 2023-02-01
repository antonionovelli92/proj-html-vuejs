<script>
import { listChessEdu } from '../data';
export default {
    name: 'SectionService',
    data() {
        return { listChessEdu }
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
                <div class="right-zone">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius facilis eveniet nisi eaque
                        facere
                        distinctio maiores nulla dignissimos minus. Nisi, sit possimus iusto quas dolores ut optio est
                        quibusdam.
                        Repellendus non distinctio ducimus sed cum vel quam quos veniam dolore cumque velit
                        exercitationem
                        repudiandae veritatis eaque animi voluptatum, fugiat fugit odio mollitia nesciunt? Distinctio
                        maxime
                        quas saepe eos et?
                        Libero at assumenda voluptatem vel et, ea adipisci voluptas est nostrum excepturi, incidunt
                        error in
                        exercitationem, ad autem facere. Consequatur ducimus laboriosam rerum beatae velit harum impedit
                        saepe
                        nobis natus?
                        Nostrum pariatur aut eos possimus aliquam. Atque tempore laboriosam incidunt enim iste,
                        temporibus
                        facere minima sit non tenetur perspiciatis. Sapiente unde ut ullam expedita modi eum provident
                        doloremque quae tempore?
                        Magni possimus sit alias saepe velit eligendi corrupti tempora quisquam, inventore rem
                        assumenda,
                        eveniet deserunt voluptatem ea, eius dolorem aut fuga quidem ipsam quae dolor laborum illo animi
                        qui!
                        Praesentium.
                        Sint, nesciunt veritatis labore tenetur nobis autem sequi aspernatur nam ut dignissimos cumque
                        incidunt
                        error! Non sunt nobis nostrum eius adipisci officia ab tempora hic id beatae? Id, distinctio
                        earum.
                    </p>
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

        li {
            list-style-image: url("../assets/img/mt-2236-home-icon-bullet.png");
            font-size: 15px;
            padding-left: 10px;
        }
    }

    .right-zone {
        flex-basis: 70%;
    }
}
</style>