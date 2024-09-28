<template>
    <main class="countries">
        <h1 class="countries__title">Countries Information</h1>
        <Row class="countries__list">
            <CountryCard
                v-for="country in countries"
                :key="country.code"
                :country="country"
            />
        </Row>
        <div v-if="loading" class="countries__loading">Loading...</div>
        <div v-if="error" class="countries__error">Error: {{ error.message }}</div>
        <div v-if="countries.length === 0" class="countries__empty">No countries found.</div>
    </main>
</template>

<script>
import { useCountries } from './useCountries';
import Row from '@/components/Grid/Row.vue';
import CountryCard from './CountryCard.vue';

export default {
    name: 'CountryList',
    components: {
        Row,
        CountryCard,
    },
    setup() {
        const { countries, loading, error } = useCountries();

        return {
            countries,
            loading,
            error,
        };
    },
};
</script>

<style scoped src="./CountryList.css"></style>
