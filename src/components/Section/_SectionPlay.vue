<script>
import Button from '../Generics/Button.vue';
export default {
    name: 'SectionPlay',
    components: { Button }
}
</script>
<template>
    <section id="playAndLearn">
        <div class="content-img d-flex">
            <figure>
                <img src="../../assets/img/mt-2236-home-gallery1.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/mt-2236-home-gallery2.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/mt-2236-home-gallery3.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/mt-2236-home-gallery4.jpg" alt="">
            </figure>
        </div>
        <div class="content-text d-flex justify-content-center align-items-center">
            <figure>
                <img src="../../assets/img/mt-2236-home-icon5.png" alt="">
            </figure>
            <div class="title mx-5">
                <h3>PLAY & LEARN</h3>
                <h6>Take a look into our day to day life here at Chess School</h6>
            </div>
            <Button :buttonLabel="'Learn More'"></Button>

        </div>

    </section>
</template>
<style scoped lang="scss">
@use '../../assets/sass/partials/variables' as*;

.content-img {
    figure {
        flex-basis: calc(100% / 4);
        margin: 0;

        img {
            object-fit: cover;
        }

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
}

.content-text {
    background-color: $yellow;
    min-height: 150px;
    width: 100%;

    img {
        height: 100px;
    }

    h6 {
        font-weight: 200;
    }
}
</style>