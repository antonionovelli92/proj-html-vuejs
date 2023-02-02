<script>
export default {
    name: 'SectionEvents',
}
</script>

<template>
    <section id="events">
        <div class="container text-center">
            <h3 class="mt-5">Our Events</h3>
            <h6>Chess is fun and we are happy to prove it at our events!</h6>
            <div class="content-summer mt-5 mb-3 d-flex justify-content-center align-items-center">
                <figure>
                    <img src="../../../public/img/mt-2236-home-img4.jpg" alt="">
                </figure>
                <div class="text">
                    <h6>Grand Summer Tournament of 2021</h6>
                    <p>
                        Join us for the Grand Summer Tournament 2021. Held every year on the first Sunday of summer, our
                        Grand Summer Tournament chess masters and beginners from North California. We have competitions
                        for different levels of chess mastery with amazing prizes awarded at each level.
                    </p>
                </div>
                <button>kmosadnola</button>
            </div>
            <div class="content-summer mt-5 mb-3 d-flex justify-content-center align-items-center">
                <figure>
                    <img src="../../../public/img/mt-2236-home-img5.jpg" alt="">
                </figure>
                <div class="text">
                    <h6>World Chess Day</h6>
                    <p>
                        Celebrated on July 20 every year, World Chess Day is one of the biggest events at our school. Be
                        ready for fun
                        tournaments and big prizes. Registration is obligatory!
                    </p>
                </div>
                <button>kmosadnola</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.content-summer {

    figure {
        flex-basis: 35%;
    }

    .text {
        flex-basis: 55%;
        margin: 0 1rem;
        text-align: left;

        h6 {
            font-weight: bold;
            margin: 1rem 0;
        }

        p {
            font-weight: lighter;
            font-size: 12px;
        }


    }

    button {
        flex-basis: 10%;
    }
}
</style>