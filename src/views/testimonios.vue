<template>
  <div class="primero">
    <NavBar />

    <div class="container mt-5">
      <section id="section1">
        <h1 class="mb-4">¿Qué dicen de nosotros?</h1>

        <div>
            <b-card>
              <b-media>
                <template>
                  <div>
                    <b-row>
                      <b-col>
                        <b-form-input v-model="name" placeholder="Ingrese su nombre">
                        </b-form-input>
                      </b-col>
                      <b-col>
                        <b-form-input v-model="email" placeholder="Ingrese su correo electrónico">
                        </b-form-input>
                      </b-col>
                    </b-row>
                    <br/>
                    <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Deja tu comentario..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                    <br />
                    <b-row>
                      <b-col>
                        <b-form-file
                          v-model="img"
                          :state="Boolean(img)"
                          placeholder="Seleccione una imágen"
                          drop-placeholder="Arrastre una imágen aquí"
                          accept="image/*"
                        ></b-form-file>
                      </b-col>
                      <b-col>
                        <b-button variant="primary" v-on:click="guardar()">Enviar</b-button>
                      </b-col>
                    </b-row>
                  </div>
                </template>
              </b-media>
            </b-card>
            <br />
          </div>

        <div>
          <div v-for="(testimonio) in current_testimonios" :key="testimonio._id">
            <b-card>
              <b-media>
                <template #aside>
                  <b-img
                    :src="testimonio.img"
                    width="128"
                    height="128"
                    alt="placeholder"
                  ></b-img>
                </template>

                <h5 class="mt-0 text-left">{{ testimonio.name }}</h5>
                <p class="mb-0 text-left">
                  {{ testimonio.comment }}
                </p>
              </b-media>
            </b-card>
            <br />
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import { api } from "../env";
import axios from "axios";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      current_testimonios: [],
      text: "",
      img: null,
      name: '',
      email: ''
    };
  },
  mounted() {
    const url = `${api.root}${api.testimonios.index}`;
    axios.get(url).then((response) => {
      this.current_testimonios = response.data.testimonios;
    });
  },
  methods: {
    guardar: () => {
      console.log(this);
      //console.log(`nombre: ${this.name} correo: ${this.email} comentario: ${this.text} img: ${this.img.name}`);
    },
  },
  filters: {
    currency: function (value) {
      return `$ ${Intl.NumberFormat("es-CO").format(value)}`;
    },
  },
};
</script>
