import { createApp } from 'vue'
import App from './App.vue'
import {  provideApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import router from './router';
import '@/assets/style/style.css';

const httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com/',
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

const app = createApp(App);

provideApolloClient(apolloClient);

app.use(router);
app.mount('#app');