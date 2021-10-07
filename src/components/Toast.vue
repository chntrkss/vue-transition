<script setup lang="ts"></script>

<template>
    <div class="toast-wrapper">
        <div class="toast">You must enter a value for the student</div>
    </div>
</template>

<style lang="scss" scoped>
    .toast-wrapper {
        position: fixed;
        width: 100%;
        top: 20px;

        .toast {
            padding: 20px;
            color: #fff;
            background-color: #ff0062;
            border-radius: 10px;
            box-shadow: 1px 3px 5px rgba(black, 0.2);
            max-width: 400px;
            margin: 0 auto;
        }
    }
</style>
