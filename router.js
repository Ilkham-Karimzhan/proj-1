import { createMemoryHistory, createRouter } from 'vue-router';
import contactUs from './src/pages/contact-us.vue';
import Index from './src/pages/index.vue';

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/contact-us', component: contactUs },
  ],
});
