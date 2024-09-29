import { ref, watch, onMounted, onBeforeUnmount, onActivated } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { getGoogleImage } from '@/services/imageService';
import { GET_COUNTRIES } from '@/queries/countryQueries';

export const useCountries = (limit = 16) => {
    const countries = ref([]);
    const displayedCountries = ref([]);
    const loading = ref(false);
    const error = ref(null);
    let currentIndex = 0;
    const { result, error: queryError } = useQuery(GET_COUNTRIES);

    const fetchImages = async () => {
        for (let country of displayedCountries.value) {
          const imageUrl = await getGoogleImage(country.name);
          country.image = imageUrl;
        }
    };

    const loadMoreCountries = () => {
        if (loading.value || currentIndex >= countries.value.length) return;

        loading.value = true;

        const newCountries = countries.value.slice(currentIndex, currentIndex + limit);
        displayedCountries.value.push(...newCountries);
        currentIndex += newCountries.length;

        fetchImages().finally(() => {
            loading.value = false;
        });
    };

    watch(result, (data) => {
        if (data && data.countries) {
          countries.value = data.countries.map(country => ({ ...country }));
          loadMoreCountries();
        }
    });

    const handleScroll = () => {
        const container = document.querySelector('.countries__list');
        if (container.scrollHeight - container.scrollTop <= container.clientHeight + 100) {
            loadMoreCountries();
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

    onActivated(() => {
        console.debug('sdad')
    });

    return {
        displayedCountries,
        loading,
        error: queryError || error,
    };
};