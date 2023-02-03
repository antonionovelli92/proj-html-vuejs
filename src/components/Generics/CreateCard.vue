<script>
export default {
    name: 'CreateCard',
    props: {
        image: String,
        title: String,
        content: String,
        other: String,
    }
};

</script>

<template>
    <div class="card-generic">
        <img :src="image" alt="">
        <h5>{{ title }}</h5>
        <p>{{ content }}</p>
        <h6>{{ other }}</h6>
        <slot></slot>
    </div>
</template>
<style>

</style>

