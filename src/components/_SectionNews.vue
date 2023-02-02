<script>

export default {
    name: 'SectionNews',

}
</script>


<template>
    <section id="latest-news">
        <div class="container d-flex content mt-5">
            <div class="content-news">
                <h2> Latest News</h2>
                <button>skdlnsa</button>
            </div>
            <div class="content-image">
                <figure>
                    <img src="../assets/img/mt-2236-blog-img1.jpg" alt="">
                </figure>
                <figcaption> The most common mistakes when managing personal finances</figcaption>
            </div>
            <div class="content-image">
                <figure>
                    <img src="../assets/img/mt-2236-blog-img2.jpg" alt="">
                </figure>
                <figcaption> Methods of the recruitment</figcaption>
            </div>
        </div>

    </section>
</template>



<style lang="scss">
@use '../assets/sass/partials/variables' as*;

#latest-news {
    background-color: $lightGray;
    min-height: 200px;
    margin-top: 30px;

    .content-news,
    .content-image {
        flex-basis: calc(100% / 3);
        margin: 0 4px;
    }

    h2 {
        &::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            margin: 2rem 0;

            background-color: $yellow;
        }
    }

    figcaption {
        font-size: 12px;
    }


}
</style>