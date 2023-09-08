import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './HomePage.vue';
import UserPage from './UserPage.vue';
import App from './App.vue' 

const routes = [
    { path: '/', name:'HomePage', component: HomePage },
    { path: '/userpage', name:"UserPage", component: UserPage },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

createApp(App).use(router).mount('#app');


