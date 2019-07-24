Vue.component('movie-card', {
  props: ['image', 'title'],
  template: `
    <div>
      <img width="100" :src="image" :alt="title" />
      <h2>{{ title }}</h2>
    </div>
  `
});

new Vue({
  el: '#app',
  mounted() {
    axios.get('https://randomuser.me/api/?results=500')
      .then((respuesta) => {
        this.personas = respuesta.data.results;
      });
  },
  data: {
    personas: []
  },
});

//https://github.com/public-apis/public-apis