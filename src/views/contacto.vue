<template>
  <div class="primero">
    <NavBar/>

  <div class="container mt-5">
    <section id="section1">
        <h1 class="mb-4">Nuestro equipo de trabajo</h1>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Daniela Zuluaga Tamayo"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <b>Frontend Dev</b>
                <br/>
                danizuta94@gmail.com
                <br/>
                +57 300 730 13 57
              </b-card-text>
            </b-card>
          </b-col>

          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Iván Salas Méndez"
              img-src="https://picsum.photos/600/300/?image=26"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <br/>
                <b>Arquitecto</b>
                <br/>
                ivanruggieris@gmail.com
                <br/>
                +57 304 772 27 86
              </b-card-text>
            </b-card>
          </b-col>

          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Daniel Eduardo Medina G."
              img-src="https://picsum.photos/600/300/?image=27"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <b>Backend Dev</b>
                <br/>
                daedmegu@gmail.com
                <br/>
                +57 319 626 90 75
              </b-card-text>
            </b-card>
          </b-col>


          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Alexander Díaz Garzón"
              img-src="https://picsum.photos/600/300/?image=28"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <b>Analísta</b>
                <br/>
                alexdiazgar@misena.edu.co
                <br/>
                +57 301 336 12 44
              </b-card-text>
            </b-card>
          </b-col>


          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Kevin Andrés Gamboa G."
              img-src="https://picsum.photos/600/300/?image=29"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <b>Tester</b>
                <br/>
                andresgkevin@unicauca.edu.co
                <br/>
                +57 314 403 67 00
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
