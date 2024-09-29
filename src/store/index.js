import { createStore } from 'vuex';
import search from './modules/search';

const store = createStore({
  modules: {
    search,
  }
});

export default store;