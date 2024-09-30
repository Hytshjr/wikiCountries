export default {
    filterCountries({ commit, state }, term) {
        term = term.toLowerCase();

        const filteredCountries = state.countries
            .filter(country => country.name.toLowerCase().includes(term))
            .sort((a, b) => {
                const aLower = a.name.toLowerCase();
                const bLower = b.name.toLowerCase();

                const aStartsWith = aLower.startsWith(term);
                const bStartsWith = bLower.startsWith(term);

                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;

                return a.name.localeCompare(b.name);
            });

        commit('setFilteredCountries', filteredCountries);
    },
    filterCountriesByContinent({ commit, state }, continent) {
        // console.debug(continent, 'continent')
        const filteredCountries = state.rootCountries
            .filter(country => {
                if (!continent) return true;
                    return country.continent.name === continent;
            })
            .sort((a, b) => a.name.localeCompare(b.name));

        commit('setFilteredCountries', filteredCountries);
        commit('setCountries', filteredCountries);
    }
};