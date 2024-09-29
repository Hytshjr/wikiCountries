<template>
    <Container>
        <Row>
            <slot></slot>
        </Row>
    </Container>
</template>

<script>
import Row from '@/components/Grid/Row.vue';
import Container from '@/components/Grid/Container.vue';

export default {
    name: 'GridMain',
    components: {
        Container,
        Row,
    }
}
</script>