<script>
export default {
    name: 'CreateCard',
    props: {
        image: String,
        title: String,
        content: String,

    }
};

</script>

<template>
    <div class="card-generic">
        <img :src="image" alt="">
        <h5>{{ title }}</h5>
        <p>{{ content }}</p>

    </div>
</template>
<style scoped lang="scss">
.card-generic {
    flex-basis: calc(100%/2);
    padding: 0 3px;
    transition: transform 250ms;

    h5 {
        margin: 1rem 0;
    }

    &:hover {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.537);
        transform: translateY(-10px);
        cursor: pointer;
    }
}
</style>

