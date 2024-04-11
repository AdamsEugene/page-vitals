import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import GetStarted from './components/GetStarted.vue';
import Steppers from './components/Steppers.vue';
import Success from './components/Success.vue';

const routes = [
  { path: '/', component: GetStarted },
  { path: '/steppers', component: Steppers },
  { path: '/success', component: Success }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);
app.mount('#app');
