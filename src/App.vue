<script setup lang="ts"></script>

<template>
    <div id="nav">
        <router-link :to="{ path: '/' }">
            <span class="material-icons"> home </span> Home
        </router-link>
        |
        <router-link :to="{ name: 'About' }">
            <span class="material-icons"> fingerprint </span> About
        </router-link>
        |
        <router-link to="/contact">
            <span class="material-icons"> phone_enabled </span>Contact
        </router-link>
    </div>
    <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in" appear>
            <keep-alive>
                <component :is="Component"></component>
            </keep-alive>
        </transition>
    </router-view>
</template>

<style lang="scss">
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

    body {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0px;
        background-color: #f7f7f7;
    }
    #nav {
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            font-weight: bold;
            color: #2c3e50;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0px 10px;
            text-decoration: none;
            transition: 300ms all ease;

            .material-icons {
                text-decoration: none;
                margin-right: 5px;
                font-size: 20px;
            }

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .route-enter-from {
        opacity: 0;
        transform: translateX(100px);
    }
    .route-enter-to {
        opacity: 1;
        transform: translateX(0);
    }
    .route-enter-active {
        transition: all 300ms ease;
    }
    .route-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
    .route-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }
    .route-leave-active {
        transition: all 300ms ease;
    }
</style>
