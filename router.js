import { createMemoryHistory, createRouter } from 'vue-router';
import contactUs from './src/pages/contact-us.vue';
import Index from './src/pages/index.vue';
import Catalog from './src/pages/catalog.vue';

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/contact-us', component: contactUs },
    { path: '/catalog', component: Catalog },
  ],
});
