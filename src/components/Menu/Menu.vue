<template>
    <nav class="menu">
        <div class="menu__logo">
            <LogoWorld />
            <span class="menu__title">WikiPaises</span>
        </div>
        <ul class="menu__list" >
            <MenuItem
            v-for="item in menuItems"
            :key="item.name"
            :item="item"
            :isActive="item.path === $route.path"
            />
        </ul>
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';
import LogoWorld from './Icons/LogoWorld.vue';

export default {
    name: 'MenuMain',
    components: {
        MenuItem,
        LogoWorld
    },
    props: {
        menuItems: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped src="./Menu.css"></style>