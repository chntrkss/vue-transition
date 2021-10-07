import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("/src/views/Home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router