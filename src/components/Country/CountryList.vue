<template>
    <main class="countries">
        <Row class="countries__list" ref="scrollContainer">
            <CountryCard
                v-for="country in displayedCountries"
                :key="country.code"
                :country="country"
                @click="openSlide(country)"
                :isActive="activeCountry === country.code"
                @toggle="setActiveCountry(country.code)"
            />
        </Row>
        <transition name="slide-panel">
            <SlidePanel
                v-if="selectedCountry"
                :country="selectedCountry"
                @close="closeSlide"
            />
        </transition>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useCountries } from '@/composables/useCountries';
import Row from '@/components/Grid/Row.vue';
import CountryCard from './CountryCard.vue';
import SlidePanel from './SlidePanel.vue';

export default {
    name: 'CountryList',
    components: {
        Row,
        SlidePanel,
        CountryCard,
    },
    setup() {
        const { displayedCountries, loading, error } = useCountries();
        console.debug(displayedCountries, 'displayedCountries')
        const selectedCountry = ref(null);
        const activeCountry = ref(null);

        const openSlide = (country) => {
            selectedCountry.value = country;
        };

        const closeSlide = () => {
            selectedCountry.value = null;
            activeCountry.value = null;
        };

        const setActiveCountry = (countryCode) => {
            if (activeCountry.value === countryCode) {
                activeCountry.value = null;
            } else {
                activeCountry.value = countryCode;
            }
        };

        return {
            displayedCountries,
            loading,
            error,
            selectedCountry,
            openSlide,
            closeSlide,
            setActiveCountry,
            activeCountry,
        };
    },
};
</script>

<style scoped src="./CountryList.css"></style>