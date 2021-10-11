<template>
  <div class="primero">
    <NavBar/>
    
    <div class="container mt-5">
    <section id="section1">
        <h1 class="mb-4">Conoce nuestros productos</h1>


        <b-row>
          <b-col sm="12" md="12" lg="12" class="text-left">
            <h2>Gama Alta</h2>
            <hr>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Nombre del producto"
              img-src="https://picsum.photos/600/300/?image=34"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <small>Descripción de producto</small>
                <br/>
                <b>Gama alta</b>
                <br/>
                <small>1000000</small>
                <br/>
                <b-button pill>Comprar</b-button>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </section>
    </div>

  </div>
</template>
<script>
import NavBar from '../components/navbar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      variable: "soy variable",

    }
  },
  methods: {
    guardar() {
      console.log('ejecutanto...')
    }
  },
}
</script>
