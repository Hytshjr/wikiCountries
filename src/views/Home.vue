<template>
    <Container>
        <Row>
            <Column class="home-content" :cols="12">
            <SearchBar/>
            <CountryList/>
            </Column>
        </Row>
    </Container>
</template>

<script>
import Container from '@/components/Grid/Container.vue';
import Row from '@/components/Grid/Row.vue';
import Column from '@/components/Grid/Column.vue';
import CountryList from '@/components/Country/CountryList.vue';
import SearchBar from '@/components/Search/SearchBar.vue';

export default {
    name: 'HomeWiki',
    components: {
        Container,
        Row,
        Column,
        SearchBar,
        CountryList,
    },
};
</script>

<style scoped>
.home-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>