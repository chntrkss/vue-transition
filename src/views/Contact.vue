<script setup lang="ts">
    import { ref } from "vue"
    import gsap from "gsap"

    const icons = ref([
        { name: "alternate_email", text: "by email" },
        { name: "local_phone", text: "by phone" },
        { name: "local_post_office", text: "by post" },
        { name: "local_fire_department", text: "by smoke signal" }
    ])

    const onEnter = (el: Element, done: () => void) => {
        if (el instanceof HTMLElement) {
            if (typeof el.dataset.index === "string") {
                let index = +el.dataset.index

                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 100
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        onComplete: done,
                        delay: index * 0.2
                    }
                )
            }
        }
    }
</script>

<template>
    <div class="contact">
        <h1>Contact</h1>
        <transition-group tag="ul" appear @enter="onEnter">
            <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
                <span class="material-icons">{{ icon.name }}</span>
                <div>{{ icon.text }}</div>
            </li>
        </transition-group>
    </div>
</template>

<style lang="scss">
    .contact {
        ul {
            padding: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            max-width: 400px;
            margin: 60px auto;

            li {
                list-style-type: none;
                background-color: white;
                border-radius: 10px;
                box-shadow: 1px 3px 5px rgba(black, 0.1);
                cursor: pointer;
                line-height: 1.5em;
                padding: 30px;
            }
        }
    }
</style>
