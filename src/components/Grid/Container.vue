<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container',
}
</script>

<style>
.container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
</style>