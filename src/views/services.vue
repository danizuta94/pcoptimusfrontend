<template>
  <div class="primero">
    <NavBar/>
    
    <div class="container mt-5">
    <section id="section1">
        <h1 class="mb-4">Conoce nuestros productos</h1>


        <b-row>
          <!-- <b-col sm="12" md="12" lg="12" class="text-left">
            <h2>Gama Alta</h2>
            <hr>
          </b-col> -->

          <b-col v-for="(article) in current_articles" :key="article._id" sm="6" md="4" lg="3">
            <b-card
              :title="article.nombre"
              :img-src="article.imagen"
              :img-alt="article.descripcion"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <small> {{ article.descripcion }} </small>
                <br/>
                <b>Gama alta</b>
                <br/>
                <small> {{article.precio | currency}} </small>
                <br/>
                <small> Stock: {{article.stock}} </small>
                <br/>
                
                <a :href="article.url">
                  <b-button pill>Comprar</b-button>
                </a>
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
import { api } from '../env' 
import axios from 'axios'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      current_articles: [],
    }
  },
  mounted(){
    const url = `${api.root}${api.article.index}`;
    axios.get(url).then(
      (response) => {
        this.current_articles = response.data.articles
      }
    );
  },
  methods: {
    guardar() {
      console.log('ejecutanto...')
    }
  },
  filters: {
    currency: function (value) {
      return `$ ${Intl.NumberFormat('es-CO').format(value)}`;
    }
  }
}
</script>
