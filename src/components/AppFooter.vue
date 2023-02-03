<script>
import Button from './Generics/Button.vue';
export default {
    name: 'AppFooter',
    components: { Button }
}
</script>


<template>
    <footer>
        <div class="container">
            <div class="content d-flex  justify-content-between justify-content-between">
                <div class=" logo">
                    <img src="../assets/img/mt-2236-home-logo.png" alt="">
                </div>
                <div class="social">
                    <h6>Follow us</h6>
                    <ul class="d-flex list-style-none">
                        <li>
                            <a href="#">
                                <fa-icon icon="fa-brands fa-facebook" />
                            </a>
                        </li>
                        <li class="mx-3">
                            <a href="#">
                                <fa-icon icon="fa-brands fa-twitter" />

                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <fa-icon icon="fa-brands fa-instagram" />

                            </a>
                        </li>
                    </ul>
                </div>
                <div class="subscribe">
                    <h6 class="sub-text">Subscribe to get the latest news, course
                        updates, discounts events</h6>
                    <input type="email" class="my-3 d-block w-100" placeholder="Enter your e-mail here *">
                    <Button :buttonLabel="'Subscribe'" class="Enroll"></Button>
                </div>

            </div>
            <figcaption class="text-white mt-5">
                Copyright© 2021. All rights Reserved
            </figcaption>

        </div>
    </footer>
</template>



<style scoped lang="scss">
@use '../assets/sass/partials/variables' as*;

footer {
    background-color: $darkGray;

    .content {
        padding: 30px;
    }

    .logo,
    .social,
    .subscribe {
        flex-basis: calc(100% / 3);
    }

    h6 {
        color: white;
        font-size: 25px;
        font-weight: 200;
    }

    .fa-brands {
        color: white;
    }

    ul {
        list-style: none;
        margin: 0;

        a {
            text-decoration: none;
            color: white;
            border: 1px solid white;
            font-size: 25px;
            padding: 5px 10px;
        }
    }

    .sub-text {
        font-size: 13px;

    }
}
</style>