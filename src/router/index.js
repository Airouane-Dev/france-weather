import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Statistique from "@/views/Statistique";
import Carte from "@/views/Carte";
import Compte from "@/views/Compte";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/statistique',
        name: 'Statistique',
        component: Statistique
    },
    {
        path: '/carte',
        name: 'Carte',
        component: Carte
    },
    {
        path: '/compte',
        name: 'Compte',
        component: Compte
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
