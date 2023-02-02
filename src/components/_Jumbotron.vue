<script>
import Button from './Generics/Button.vue';
export default {
    name: 'Jumbotron',
    components: { Button }
}
</script>


<template>
    <section id="jumbotron ">
        <div class="jumbo-content container">
            <h5>WELCOME</h5>
            <h1>ACADEMIC CHESS FOR <span>EVERYONE</span></h1>
            <p>We are dedicated to broadening and developing chess as art, recreation, and as significant element of
                culture in Northern California.</p>
            <Button :buttonLabel="'Enroll Now'"></Button>
            <Button :buttonLabel="'Learn More'"></Button>



        </div>

    </section>

</template>



<style scoped lang="scss">
@use "../assets/sass/partials/variables" as*;


.jumbo-content {
    margin-top: 150px;
    padding-right: 50%;

    h5 {
        background-color: $yellow;
        color: black;
        border-radius: 40px;
        padding: 3px 15px;
        font-size: 10px;
        display: inline-block;
        cursor: pointer;
    }

    h1 {
        font-size: 70px;

        span {
            font-style: oblique;
            color: $yellow;
        }
    }

    p {
        font-size: 20px;
        margin: 2rem 0
    }
}
</style>