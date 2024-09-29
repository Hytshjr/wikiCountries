<template>
  <div id="app">
    <Menu :menuItems="menuItems" />
    <div class="main-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Vista 1', path: '/vista1' },
        { name: 'Vista 2', path: '/vista2' }
      ]
    }
  },
}
</script>

<style>
#app {
  display: flex;
  width: 100%;
  background-color: rgb(185, 232, 250);
}

.main-content {
  flex-grow: 1;
}
</style>
