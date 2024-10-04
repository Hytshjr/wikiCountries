import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { getGoogleImage } from '@/services/imageService';
import { GET_COUNTRIES } from '@/queries/countryQueries';
import { useStore } from 'vuex';

export const useCountries = (limit = 16) => {
    const store = useStore();
    const countries = ref([]);
    const displayedCountries = ref([]);
    const loading = ref(false);
    const error = ref(null);
    let currentIndex = 0;
    const { result, error: queryError } = useQuery(GET_COUNTRIES, null, {
        fetchPolicy: 'network-only'
      });

    const filteredCountries = computed(() => store.state.search.filteredCountries);

    const fetchImages = async (countriesList) => {
        for (let country of countriesList) {
            if (!country.image) {
                const imageUrl = await getGoogleImage(country.name);
                country.image = imageUrl;
            }
        }
    };

    const loadFilterCountries = async () => {
        loading.value = true;

        const filterCountries = filteredCountries.value.slice(currentIndex, currentIndex + limit);
        displayedCountries.value.push(...filterCountries);
        currentIndex += filterCountries.length;

        await fetchImages(filterCountries);

        loading.value = false;
    };

    const loadMoreCountries = async () => {
        if (loading.value || currentIndex >= countries.value.length) return;

        loading.value = true;

        const newCountries = countries.value.slice(currentIndex, currentIndex + limit);
        displayedCountries.value.push(...newCountries);
        currentIndex += newCountries.length;

        await fetchImages(newCountries);

        loading.value = false;
    };

    watch(result, (data) => {
        if (data && data.countries) {
            countries.value = data.countries.map(country => ({ ...country }));
            store.commit('search/setCountries', countries.value);
            store.commit('search/setRootCountries', countries.value);
            loadMoreCountries();
        }
    });

    watch(filteredCountries, () => {
        displayedCountries.value = [];
        currentIndex = 0;
        loadFilterCountries();
    });

    const handleScroll = () => {
        const container = document.querySelector('.countries__list');
        if (container.scrollHeight - container.scrollTop <= container.clientHeight + 100) {
            if (filteredCountries.value.length > 0) {
                loadFilterCountries();
            } else {
                loadMoreCountries();
            }
        }
    };

    onMounted(() => {
        const container = document.querySelector('.countries__list');
        container.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        const container = document.querySelector('.countries__list');
        container.removeEventListener('scroll', handleScroll);
    });

    return {
        displayedCountries,
        loading,
        error: queryError || error,
    };
};
