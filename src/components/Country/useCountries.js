import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { getGoogleImage } from '@/services/imageService';
import { gql } from '@apollo/client/core';

const GET_COUNTRIES = gql`
  query {
    countries {
        code
        name
        capital
        currency
        emoji
        phone
        languages {
            name
        }
        continent {
            name
        }
        states {
            name
        }
    }
  }
`;

export const useCountries = (limit = 15) => {
    const countries = ref([]);
    const countryNames = ref([]);
    const { result, loading, error } = useQuery(GET_COUNTRIES);

    const processCountryNames = async (names) => {
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            const imageUrl = await getGoogleImage(name);
            countries.value[i].image = imageUrl;
        }
    };

    watch(result, (data) => {
        if (data && data.countries) {
            countries.value = data.countries.slice(0, limit).map(country => ({ ...country }));
            countryNames.value = data.countries.slice(0, limit).map(country => country.name);
            processCountryNames(countryNames.value);
        }
    });

    return {
        countries,
        loading,
        error,
    };
};