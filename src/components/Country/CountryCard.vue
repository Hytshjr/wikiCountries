<template>
    <div class="countries__item">
        <div class="countries__card">
            <img v-if="country.image" :src="country.image" :alt="`Image of ${country.name}`" class="countries__image" />
            <div class="countries__info">
                <img :src="`https://flagcdn.com/h40/${country.code.toLowerCase()}.png`"
                     :alt="`Flag of ${country.name}`" class="countries__flag" />
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
    },
};
</script>

<style scoped src="./CountryCard.css"></style>