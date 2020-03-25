<template>
    <div>
        <div v-if="isLoggedIn" class="container">
            <img v-for="image in allImages" :src="image.link" :key="image.id" />
        </div>
        <h2 v-else>Log in to get started</h2>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "ImageList",
        computed: mapGetters(['allImages', 'isLoggedIn']),
        methods: mapActions(['fetchImages']),
        created() {
            this.fetchImages();
        }
    }
</script>

<style scoped>

</style>