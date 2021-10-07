<script setup lang="ts">
    import Toast from "/src/components/Toast.vue"
    import { ref } from "vue"
    import Students from "/src/components/Students.vue"

    const showToast = ref(false)

    const triggerToast = () => {
        showToast.value = true
        setTimeout(() => (showToast.value = false), 3000)
    }
</script>

<template>
    <div class="home">
        <transition name="toast">
            <Toast v-if="showToast" />
        </transition>
        <transition name="route" appear>
            <Students @bad-value="triggerToast" />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    // animate.css
    .toast-enter-active {
        animation-name: fadeInDown, wobble;
        animation-duration: 1000ms, 1000ms;
        animation-delay: 0ms, 1500ms;
        animation-timing-function: ease, ease;
        animation-iteration-count: 1, 1;
    }
    .toast-leave-active {
        animation-name: fadeOutUp;
        animation-duration: 1000ms;
        animation-timing-function: ease;
        animation-iteration-count: 1;
    }
</style>
