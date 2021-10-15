<template>
  <div class="login">
    
    <div class="mt-5 login-content">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>        

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
        <b-button type="reset" variant="danger">Regresar</b-button>
      </b-form>      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { api } from "../env";
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        const url = `${api.root}${api.auth.login}`;
        const request = {
          username: this.form.email,
          password: this.form.password
        }
        axios.post(url, request).then(
          (r) => {
            if(r.data.success){
              //const token = r.data.token;
              this.$router.push('/admin')
            }else{
              alert("Usuario y/o contraseña incorrectos");
            }
          },
          (err) => {
            alert("Usuario y/o contraseña incorrectos");
            console.info(err);
          }
        )
        // alert(JSON.stringify(this.form))
        // this.$router.push('admin')
      },
      onReset(event) {
        event.preventDefault()
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  .login {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .login .login-content{
    background-color: aqua;
    padding: 15px;
    max-width: 400px;
    border-radius: 10px;
  }
</style>