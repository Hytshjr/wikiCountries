import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: Home,
    meta: {
        title: 'WikiPaises: Tu Guía Global'
      }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'WikiPaises';
    document.title = title;
    next();
  });

export default router;