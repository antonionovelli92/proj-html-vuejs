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

</style>

