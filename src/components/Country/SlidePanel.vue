<template>
    <div class="slide-panel">
        <button @click="close" aria-label="Cerrar slide panel">✕</button>
        <div class="countries__container-image">
            <img v-lazy="country.image" :alt="`Imagen de ${country.name}`" class="countries__image" loading="lazy" />
        </div>
        <div class="countries__info">
            <img :src="`https://flagcdn.com/h40/${country.code.toLowerCase()}.png`" :alt="`Bandera de ${country.name}`"
                class="countries__flag" />
            <div class="countries__details">
                <strong class="countries__name">{{ country.name }}</strong>
                <span class="countries__continent">{{ country.continent.name }}</span>
            </div>
        </div>
        <ul class="country-details">
            <CountryDetailItem v-if="country.capital" category="Capital" :value="country.capital" />
            <CountryDetailItem v-if="country.phone" category="Teléfono" :value="'+' + country.phone" />
            <CountryDetailItem v-if="country.phone" category="Teléfono" :value="'+' + country.phone" />
            <CountryDetailItem v-if="country.languages && country.languages.length" category="Idioma" :value="country.languages.map(lang => lang.name)" />
            <CountryDetailItem v-if="country.currencies && country.currencies.length" category="Moneda" :value="country.currencies" />
            <li v-if="country.states && country.states.length" class="country-details__item">
                <span class="country-details__category">Estados</span>
                <div class="country-details__states-container">
                    <span
                        v-for="(state, index) in country.states"
                        :key="state.name"
                        class="country-details__state"
                    >
                        {{ state.name }}<span v-if="index < country.states.length - 1"> </span>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import CountryDetailItem from './CountryDetailItem.vue';

export default {
    name: 'SlidePanel',
    components: {
        CountryDetailItem
    },
    props: {
        country: {
            type: Object,
            required: true,
        },
    },
    emits: ['close'],
    methods: {
        close() {
            this.isCollapsed = true;
            this.$emit('close');
        },
    },
};
</script>

<style scoped src="./SlidePanel.css"></style>