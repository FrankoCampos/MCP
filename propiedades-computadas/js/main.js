new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Mundo :) !',
        nuevaTarea: null,
        tareas: [{
            titulo: 'Aprender Vue.js',
            prioridad: true,
            antiguedad: 23
        },
        {
            titulo: 'Aprender ES6',
            prioridad: false,
            antiguedad: 135
        },
        {
            titulo: 'Programar algo todos los días',
            prioridad: true,
            antiguedad: 378
        },
        ]
    },
    methods: {
        agregarTarea() {

        },
    },
    computed: {
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        }
    }
});