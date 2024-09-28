<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'RowGrid',
}
</script>

<style>
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>