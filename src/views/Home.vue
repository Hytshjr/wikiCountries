<template>
    <Container>
        <Row>
            <Column :cols="12">
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

export default {
    name: 'HomeWiki',
    components: {
        Container,
        Row,
        Column,
        CountryList,
    },
};
</script>