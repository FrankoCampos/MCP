Vue.component('mis-tareas', {
    
});

new Vue({
    el: 'main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    data: {
        tareas: [],
    }
});