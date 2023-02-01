<script>
import { listHeader } from '../data';
export default {
    name: 'AppHeader',
    data() {
        return { listHeader }
    }
}
</script>


<template>
    <header>
        <div class="navbar">
            <div class="top-nav container d-flex justify-content-beetwen">
                <h5>
                    <fa-icon icon="fa-solid fa-location-dot" />6767 Santa Monica Blvd, Los Angeles,
                    CA 90038
                </h5>
                <h5>
                    <fa-icon icon="fa-solid fa-phone " />Call now 123-456-7890
                </h5>
                <button>DONATE</button>
            </div>
            <div class="bottom-nav container d-flex justify-content-beetwen">
                <figure>
                    <a href="#"><img src="../assets/img/mt-2236-home-logo.png" alt="logo-chess"></a>
                </figure>
                <ul class="d-flex">
                    <li v-for="list in listHeader">
                        <a href="">{{ list }}</a>
                    </li>
                </ul>
            </div>

        </div>


    </header>

</template>



<style lang="scss">
@use "../assets/sass/partials/variables" as*;

header {
    background-image: url('../assets/img/mt-2236-home-bg1.jpg');
    width: 100%;
    height: 500px;
    background-position: center;
    background-size: cover;
    color: $white;

    .navbar {
        background-color: $transparent-black;
        height: 100px;
        width: 100%;



        h5 {
            font-size: 11px;
            cursor: pointer;

            svg {
                margin-right: 0.50rem;
                font-size: 12px;
                color: $yellow;
            }
        }

        li {
            list-style: none;
            margin: 0 0.50rem;

            a {
                text-decoration: none;
                color: $white;
                cursor: pointer;

                &:hover {
                    color: $yellow;
                }
            }
        }
    }
}
</style>