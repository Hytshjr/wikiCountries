<template>
    <nav :class="{ 'menu__collapsed': isCollapsed }">
        <div class="menu__logo">
            <LogoWorld />
            <span class="menu__title">WikiPaises</span>
            <button
                class="toggle-button"
                @click="toggleMenu"
                :aria-expanded="isCollapsed.toString()"
                aria-label="Menu Desplegable">
                <p>{{ isCollapsed ? '≡' : '✕'  }}</p>
            </button>
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
    },
    data() {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleMenu() {
            this.isCollapsed = !this.isCollapsed;
        }
    },
}
</script>

<style scoped src="./Menu.css"></style>