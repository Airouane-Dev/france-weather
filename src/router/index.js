import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/components/Dashboard";
import Statistique from "@/components/Statistique";
import Carte from "@/components/Carte";
import Compte from "@/components/Compte";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/statistique',
        name: 'Statisitque',
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
