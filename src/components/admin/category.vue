<template>
  <div @load="onLoad">
    <h1>Lista de Categorias</h1>
    <div class="mb-3 text-left">
      <b-button v-b-modal.modal-1 variant="outline-primary">Crear nueva categoria</b-button>
      <b-modal id="modal-1" title="Creando nueva categoria" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Nombre de la categoría:"
            label-for="input-1"
            description="Elige un nombre descriptivo"
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="Categoría..."
              required
            ></b-form-input>

            
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Descripcion"
            label-for="input-1"
            description="Describe la categoría"
          >
            <b-form-input
              id="input-1"
              v-model="form.description"
              type="text"
              placeholder="Descripcion..."
              required
            ></b-form-input>           
          </b-form-group>

          <b-button type="submit" variant="primary" class="mr-2">Guardar</b-button>
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
      </b-modal>
    </div>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { api } from '../../env'
  export default {
    data() {
      this.onLoad();
      return {
        items: [],
        form: {
          name: '',
          description: '',
        },
        show: true
      }
    },
    methods: {
      onLoad(){
        axios.get(`${api.root}${api.categorias.index}`).then(
          (r)=>{
            this.items = [];
            for(const c of r.data.categories){
              this.items.push(
                {
                  name: c.name,
                  description: c.description
                }
              );
            }
          }
        );
      },
      onSubmit(event) {
        event.preventDefault()
        
        const ncategoria = {
          name: this.form.name,
          description: this.form.description
        };
        
        axios.post(`${api.root}${api.categorias.store}`, ncategoria).then(
          (r) => {
            console.log(r.data);
            this.onLoad();
            this.$swal({
              position: 'top-end',
              icon: 'success',
              title: 'Tu categoría ha sido creada',
              showConfirmButton: false,
              timer: 2000
            })
          }
        );
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.description = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>