<template>
    <router-link :to="item.path">
        <li :class="{ active: isActive }">
            {{ item.name }}
        </li>
    </router-link>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    li {
        padding: 9px 15px;
        border-radius: 6px;
        box-sizing: content-box;
        color: #adadad;
        margin-bottom: 10px;
        min-width: 100px;
    }

    li:hover {
        color: #ffffff;
    }

    .active {
        background-color: #ffffff38;
        color: #ffffff;
    }
</style>