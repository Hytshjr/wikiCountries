import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Vista1 from '@/views/Vista1.vue';
import Vista2 from '@/views/Vista2.vue';

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: Home,
    meta: {
      title: 'WikiPaises: Tu Guía Global'
    }
  },
  {
    path: '/vista1',
    name: 'vista1',
    component: Vista1,
  },
  {
    path: '/vista2',
    name: 'Vista2',
    component: Vista2,
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