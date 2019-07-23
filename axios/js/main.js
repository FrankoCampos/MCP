new Vue({
  el: 'main',
  mounted() {
    this.cargarPersonas();
  },
  data: {
    personas: []
  },
  methods: {
    cargarPersonas() {
      axios.get('https://randomuser.me/api/?results=500')
        .then((respuesta) => {
          //console.log(respuesta)
          this.personas = respuesta.data.results;
        });
    }
  }
});