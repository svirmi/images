<template>
    <div class="dropper">
        <input type="file" />
        <span>Drag files here!</span>
    </div>
</template>

<script>
    export default {
        name: "UploadForm"
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