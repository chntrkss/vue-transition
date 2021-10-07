<script setup lang="ts">
    import anime from "animejs"
    import gsap from "gsap/all"
    import { ref } from "vue"

    const isHidden = ref(false)

    const firstEnter = (el: Element, done: () => void) => {
        anime({
            targets: el,
            translateX: [100, 0],
            easing: "easeInOutCirc",
            duration: 500,
            complete: done
        })
    }
    const firstLeave = (el: Element, done: () => void) => {
        anime({
            targets: el,
            translateX: [0, -100],
            easing: "easeInOutCirc",
            duration: 500,
            complete: done
        })
    }

    const secondEnter = (el: Element, done: () => void) => {
        anime({
            targets: el,
            translateX: [-100, 0],
            easing: "easeInOutCirc",
            duration: 500,
            complete: done
        })
    }
    const secondLeave = (el: Element, done: () => void) => {
        anime({
            targets: el,
            translateX: [0, 100],
            easing: "easeInOutCirc",
            duration: 500,
            complete: done
        })
    }

    const thirdEnter = (el: Element, done: () => void) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.1,
                onComplete: done
            }
        )
    }
    const thirdLeave = (el: Element, done: () => void) => {
        gsap.fromTo(
            el,
            {
                opacity: 1,
                y: 0
            },
            {
                opacity: 0,
                y: 100,
                duration: 0.5,
                onComplete: done
            }
        )
    }
</script>

<template>
    <div class="about">
        <h1>About</h1>

        <button @click="isHidden = !isHidden">Toggle</button>

        <transition @enter="firstEnter" @leave="firstLeave" appear>
            <p v-show="!isHidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
                officia possimus delectus inventore quod quisquam culpa voluptas iusto,
                quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                assumenda nam!
            </p>
        </transition>
        <transition @enter="secondEnter" @leave="secondLeave" appear>
            <p v-show="!isHidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
                officia possimus delectus inventore quod quisquam culpa voluptas iusto,
                quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                assumenda nam!
            </p>
        </transition>
        <transition
            enter-active-class="animate__animated animate__flipInX animate__faster"
            leave-active-class="animate__animated animate__flipOutX animate__faster"
            appear
        >
            <p v-show="!isHidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
                officia possimus delectus inventore quod quisquam culpa voluptas iusto,
                quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                assumenda nam!
            </p>
        </transition>
        <transition @enter="thirdEnter" @leave="thirdLeave" appear>
            <p v-show="!isHidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
                officia possimus delectus inventore quod quisquam culpa voluptas iusto,
                quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                assumenda nam!
            </p>
        </transition>
    </div>
</template>

<style lang="scss">
    .about {
        max-width: 600px;
        margin: 20px auto;
    }
</style>
