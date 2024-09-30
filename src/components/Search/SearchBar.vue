<template>
    <div class="countries__search"  @click="toggleContinentSelector">
        <div class="countries__search-container">
            <label for="country-search" class="countries__search-label">País</label>
            <input id="country-search" type="text" placeholder="Ingresa el país" class="countries__search-input"
                v-model="searchTerm" @input="filterCountries(searchTerm)" />
        </div>
        <button class="countries__search-button" @click="filterCountries(searchTerm)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <strong>Buscar</strong>
        </button>

        <div class="countries__continent-selector" v-if="!showContinentSelector">
            <span class="continent__title">Filtrar por continentes</span>
            <span class="continent__clear" @click="clearFilters">Limpiar</span>
            <div class="continent-option__container">
                <div class="continent-option"
                    :class="{ selected: selectedContinent === continent.name }"
                    v-for="continent in continents"
                    :key="continent.name"
                    @click="selectContinent(continent.name)">
                        <div class="continent-image__container">
                            <img :src="continent.image" :alt="continent.name" class="continent-image" />
                        </div>
                        <span class="continent-option__name">{{ continent.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import asiaImage from '@/assets/continents/asia.png';
import europeImage from '@/assets/continents/europe.png';
import africaImage from '@/assets/continents/africa.png';
import oceaniaImage from '@/assets/continents/oceania.png';
import northAmericaImage from '@/assets/continents/north-america.png';
import southAmericaImage from '@/assets/continents/south-america.png';

export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
            selectedContinent: '',
            showContinentSelector: true,
            continents: [
                { name: 'Asia', image: asiaImage },
                { name: 'Europe', image: europeImage },
                { name: 'Africa', image: africaImage },
                { name: 'Oceania', image: oceaniaImage },
                { name: 'North America', image: northAmericaImage },
                { name: 'South America', image: southAmericaImage }
            ],
        };
    },
    computed: {
        ...mapState('search', ['countries']),
    },
    methods: {
        ...mapActions('search', ['filterCountries', 'filterCountriesByContinent']),
        selectContinent(continent) {
            this.selectedContinent = continent;
            this.filterCountriesByContinent(continent);
            this.showContinentSelector = false;
        },
        toggleContinentSelector() {
            this.showContinentSelector = !this.showContinentSelector;
        },
        clearFilters() {
            this.searchTerm = '';
            this.selectedContinent = '';
            this.filterCountries();
            this.filterCountriesByContinent('');
        },
    },
    watch: {
        searchTerm(newVal) {
            this.filterCountries(newVal);
        },
        selectedContinent() {
            this.filterCountriesByContinent(this.selectedContinent);
        },
    },
};
</script>

<style scoped src="./SearchBar.css"></style>