import { reactive } from 'vue';

export const userStore = reactive({
    id: 1, // O ID que confirmaste no SQLite
    username: 'Julio',
    isLoggedIn: true
});
