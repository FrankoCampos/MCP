const eventBus = new Vue();

Vue.component('listado-productos', {
  props: ['productos'],
  template: `
  <section>
      <ul>
          <li v-for="producto in productos">
              {{ producto.nombre }} - 
              <small>{{ producto.precio.toFixed(2) }} MXN.</small>
              <button @click="eliminarProducto(producto.precio)">-</button>
              <button @click="anadirProducto(producto.precio)">+</button>
          </li>
      </ul>
  </section>`,
  methods: {
    eliminarProducto(precio) {
      eventBus.$emit('eliminar', precio);
    },
    anadirProducto(precio) {
      eventBus.$emit('anadir', precio);
    }
  },
});
Vue.component('carrito-compra', {
  template: `
  <section>
      <h1> {{ total.toFixed(2) }} MXN. </h1>
      <h3> {{ cantidadProductos }} productos </h3>
  </section>`,
  data() {
    return {
      cantidadProductos: 0,
      total: 0,
    }
  },
  created() {
    eventBus.$on('anadir', (precio) => {
      if (this.total >= 0) {
        this.total += precio;
        this.cantidadProductos++;
      }
    });
    eventBus.$on('eliminar', (precio) => {
      if (this.total > 0) {
        this.total -= precio;
        this.cantidadProductos--;
      }
    });
  },
});
new Vue({
  el: 'main',
  data: {
    productos: [
      { nombre: 'Libro ES6', precio: 39 },
      { nombre: 'Portátil', precio: 1300 },
      { nombre: 'Café', precio: 2 },
      { nombre: 'Auriculares', precio: 80 },
      { nombre: 'Moleskine', precio: 19 },
    ]
  }
});