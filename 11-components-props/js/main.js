Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {

    },
    template: ``,
    methods: {
        cambiarProp() {
            
        }
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'Franko Campos',
    },
});