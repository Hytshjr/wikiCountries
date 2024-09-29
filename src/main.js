import App from './App.vue'
import router from './router';
import { createApp } from 'vue'
import '@/assets/style/style.css';
import VueLazyload from 'vue-lazyload';
import apolloClient from '@/graphql/apollo-client'
import {  provideApolloClient } from '@vue/apollo-composable';

const app = createApp(App);

provideApolloClient(apolloClient);
app.use(VueLazyload, {
  loading: '/loading-image.gif',
  error: '/loading-image.gif',
});
app.use(router);
app.mount('#app');