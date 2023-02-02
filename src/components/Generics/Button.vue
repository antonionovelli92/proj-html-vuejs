<script>
export default {
    name: 'Button',
    props: {
        buttonLabel: String,
    },

};

</script>


<template>

    <button type="submit" class="my-3">{{ buttonLabel || 'Learn More' }}</button>

</template>
<style>

</style>