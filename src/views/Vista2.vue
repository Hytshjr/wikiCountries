<template>
    <Container>
        <Row>
            <Column :cols="12">
                Hola! Esta es la vista 2
            </Column>
        </Row>
    </Container>
</template>

<script>
import Container from '@/components/Grid/Container.vue';
import Row from '@/components/Grid/Row.vue';
import Column from '@/components/Grid/Column.vue';

export default {
    name: 'HomeWiki',
    components: {
        Container,
        Row,
        Column,
    },
};
</script>