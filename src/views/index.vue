<template>
  <div>   
    <NavBar/>
    <!-- <nav-bar/> -->
    <div>
      <b-img src="http://esolutionsind.com/img/header/03.jpg" fluid alt="Responsive image"></b-img>
    </div>
    <div class="container mt-5">
      <section id="section1">
        <h1 class="mb-4">Nuestro Proyecto</h1>
        <b-row>
          
          
          
          <b-col sm="12" md="12" lg="12">
            <p>PC Optimus Solution es una empresa de venta de informática y tecnología con presencia online y tiendas físicas en Colombia.
            Durante más de 10 años hemos llevado a los hogares de nuestros clientes, soluciones en tecnología informática de alta calidad y la mejor garantía con precios competitivos.
            El acompañamiento uno a uno, acerca a nuestros clientes con nuestros asesores comerciales. </p>

            <p> Nuestro valor agregado de servicio al cliente, permite que nuestros clientes queden satisfechos con sus compras, pues en el proceso de adquisición de los productos de nuestro catálogo, hemos resuelto sus inquietudes respecto a especificaciones técnicas, productos sustitutos de mayor o menor valor, usos y aplicaciones de nuestros productos, términos de garantía y proceso de trámite de garantía con los fabricantes que representamos.
            </p>
          </b-col>
        </b-row>
      </section>
      <section id="section2" class="mt-5">
        <h1 class="mb-4">Direccionamiento Estratégico</h1>
        <b-row>
          <b-col sm="6" md="4" lg="6">
            <b-card
              title= "MISIÓN"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-4"
            >
              <b-card-text>
                <p>Ofrecer un gran servicio de venta de computadoras, partes y servicios de alta calidad y conformidad a través de un excelente equipo de trabajo con el fin de satisfacer las necesidades de nuestros clientes.Nuestra meta es anticiparnos a las necesidades de nuestros clientes, y satisfacerlas con rapidez, amabilidad, cortesía, y de manera integral.</p>
              </b-card-text>

            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="6">
            <b-card
              title="VISIÓN"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>La visión de esta empresa es ser la primera opción de los clientes actuales y futuros, satisfaciendo sus necesidades y requerimientos. </p>
                <p>Además ser reconocida en el ámbito nacional, por la calidad de sus servicios, atenciòn, y mantenerse líder de competitividad en el mercado de la computación.</p>

              </b-card-text>

            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            
          </b-col>
          <b-col sm="6" md="4" lg="3">
            
          </b-col>
        </b-row>
      </section>
      <section id="section3" class="mt-5">
        <h1 class="mb-4">Valores</h1>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="COMPROMISO"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>Compartiendo conocimientos, experiencias y esfuerzo, para poder ofrecer el mejor servicio. Supone trabajar con liderazgo bajo un método, en un ambiente que promueva el enriquecimiento, en el cual se valoran y se respetan todas las opiniones e ideas.</p>
              </b-card-text>

             </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="VOCACIÓN"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>Ayudamos a pensar y a tomar decisiones cuando nuestros clientes se enfrentan a desafíos tecnológicos, porque creemos en las empresas. Nuestra principal motivación es conocer y satisfacer las necesidades, dando una respuesta rápida y eficaz a sus peticiones.</p>
               </b-card-text>

             </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="PASIÓN"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>Contando con esa fuerza interior implacable, que sale del corazón y del alma. Con elementos más trascendentales que el dinero o metas individuales. Soñamos con una organización con pasión dirigida a clientes, que se apartan de lo razonable para otros.</p>
              </b-card-text>

            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="HONESTIDAD"
              img-src="https://thumbs.dreamstime.com/b/abstract-internet-thing-technology-automation-smart-industry-website-header-concept-168393645.jpg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>Con transparencia, honradez e integridad en nuestras relaciones del día a día, empezando por nosotros mismos y rechazando prácticas de negocio injustas, orientadas a obtener una ventaja particular y siendo ejemplo para los demás. Hacemos lo que sabemos…</p>
              </b-card-text>

             </b-card>
          </b-col>
        </b-row>
      </section>
    </div>
    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"><b-icon-arrow-up-circle-fill font-scale="3"></b-icon-arrow-up-circle-fill></a>
    </transition>
    <footer class="d-flex bg-dark text-light align-items-center px-3 py-2">
      <div class="text-center w-100">
        <strong class="mr-auto">contacto@pcoptimusolution.com</strong>
      </div>
    </footer>
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
      isVisibleUpButton: true,
      scrollPosition: 0,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    }
  },
}
</script>
<style>
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}
</style>