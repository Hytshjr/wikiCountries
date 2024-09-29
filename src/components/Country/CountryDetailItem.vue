<template>
    <li class="country-details__item">
        <strong class="country-details__category">{{ category }}: </strong>
        <span class="country-details__value">
            <template v-if="isArray(value)">
                {{ value.join(', ') }}
            </template>
            <template v-else>
                {{ value }}
            </template>
        </span>
    </li>
</template>

<script>
export default {
    name: 'CountryDetailItem',
    props: {
        category: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Array],
            required: true,
        },
    },
    methods: {
        isArray(value) {
            return Array.isArray(value);
        },
    },
};
</script>

<style>
.country-details__item {
    margin-bottom: 13px;
    font-size: 1rem;
}

.country-details__category {
    font-weight: bold;
    color: #00bfff;
}

.country-details__value {
    font-weight: normal;
    color: #333;
}
</style>
