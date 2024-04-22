import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import GetStarted from './components/GetStarted.vue';
import Steppers from "./components/SteppersComponent.vue";
import SuccessComponent from './components/SuccessComponent.vue';
import GetStartedBanner from './components/GetStartedBanner.vue';
// import PdfTemplate from './components/PdfTemplate.vue';

const routes = [
  { path: "/", component: GetStarted },
  { path: "/steppers", component: Steppers },
  { path: "/success", component: SuccessComponent },
  { path: "/banner", component: GetStartedBanner },
  // { path: "/pdf", component: PdfTemplate },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);
app.mount('#app');
