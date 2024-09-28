import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.unsplash.com',
});

export const getGoogleImage = async (countryName) => {
    try {
        const response = await apiClient.get('/search/photos', {
            params: {
                client_id: process.env.VUE_APP_UNSPLASH_KEY,
                query: `city ${countryName}`,
                orientation: 'landscape',
            },
        });
        return response.data.results[0]?.urls.small;
    } catch (err) {
        console.error(`Error fetching image for ${countryName}:`, err);
        return null;
    }
};
