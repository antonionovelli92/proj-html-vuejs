<script>
export default {
    name: 'SectionFirst',
}
</script>

<template>
    <section id="firstStep">
        <div class="content conteiner d-flex justify-content-center align-items-center">
            <div class="content-text">
                <h3>TAKE THE <span>FIRST STEP</span></h3>
                <h6>The fascinating world of chess has its doors open for anyone</h6>
            </div>
            <button>bdhjkshbdv</button>

        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../assets/sass/partials/variables' as*;

#firstStep {
    background-image: url('../assets/img/mt-2236-home-bg2.jpg');
    width: 100%;
    min-height: 40px;
    color: white;

    .content {
        margin: 70px auto;

        h3 {
            text-shadow: 1px 1px 5px black;
            font-size: 60px;
            margin-right: 4rem;

            span {
                color: $yellow;
            }
        }

        h6 {
            font-weight: lighter;
        }

    }

}
</style>