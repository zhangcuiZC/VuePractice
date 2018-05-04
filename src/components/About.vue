<template>
    <div>
        <h1>About {{ name }}</h1>
        <Button type="primary">Primary</Button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { Button } from 'iview';
    export default {
        name: 'About',
        computed: mapState('about',['name']),
        components: { Button }
    }
</script>