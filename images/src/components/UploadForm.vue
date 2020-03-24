<template>
    <div class="dropper">
        <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
        <span>Drag files here!</span>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "UploadForm",
        methods: mapActions(['uploadImages'])
    }
</script>

<style scoped>
    .dropper {
        height: 30vh;
        width: 30%;
        border: 2px dashed black;
        border-radius: 5px;
        position: relative;
    }
    .dropper:hover{
        background-color: darkgray;
    }
    input {
        height: 30vh;
        position: absolute;
        width: 100%;
        opacity: 0;
    }
</style>