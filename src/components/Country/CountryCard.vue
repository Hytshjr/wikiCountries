<template>
    <div class="countries__item">
        <div
            class="countries__card"
            :class="{ active: isActive }"
            @click="handleClick"
        >
            <img v-lazy="country.image" :alt="`Imagen de ${country.name}`" class="countries__image" />
            <div class="countries__info">
                <img
                    :src="`https://flagcdn.com/h40/${country.code.toLowerCase()}.png`" 
                    :alt="`Bandera de ${country.name}`"
                    class="countries__flag"
                />
                <div class="countries__details">
                    <strong class="countries__name">{{ country.name }}</strong>
                    <span class="countries__continent">{{ country.continent.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryCard',
    props: {
        country: {
            type: Object,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick() {
            this.$emit('toggle');
        },
    },
};
</script>

<style scoped src="./CountryCard.css"></style>