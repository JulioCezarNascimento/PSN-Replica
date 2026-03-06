import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameForm from '../components/GameForm.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/admin/jogos/novo',
        name: 'novo-jogo',
        component: GameForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
