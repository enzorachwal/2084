<template>
    <b-navbar class="nav-2084">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/branco2.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                    style="height: 32px; max-height:none"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#/" class="has-text-white">
                Home
            </b-navbar-item>
            <b-navbar-item href="#/agenda" class="has-text-white">
                Consultas
            </b-navbar-item>
                    <b-navbar-item href="#/perfil" class="has-text-white">
                Perfil
              </b-navbar-item>  
              <b-navbar-item href="#/medicopov" class="has-text-white">
                Médico 
            </b-navbar-item>  
                    <b-navbar-item href="#/contato" class="has-text-white">
                Contato
            </b-navbar-item>
             <b-navbar-item href="#/duvidas" class="has-text-white">
                Dúvidas
            </b-navbar-item>
            <b-navbar-item href="#/medico" class="has-text-white">
                Perfil Médico
            </b-navbar-item>
                <b-navbar-item href="https://docs.google.com/forms/d/1JhPVbjWrnzzijbj6LP6bhhx-1nVwGYMZKXeKgDYV8C8/edit" class="has-text-white">
                Preencha nosso Fomulário!
            </b-navbar-item>         
            <template v-if="currentUser">
              <b-navbar-item tag="div">
                  {{currentUser.username}}
              </b-navbar-item>  
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button" @click="sair()">
                          <strong>Sair</strong>
                      </a>
                  </div>
              </b-navbar-item>                                        
            </template>
            <template v-else>
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button is-primary" @click="entrarCadastrar()">
                          <strong>Entrar/Cadastrar</strong>
                      </a>
                  </div>
              </b-navbar-item>                      
            </template>
        </template>
<template #end>
            
        </template>


    </b-navbar>
    
</template>

<style>
  .nav-2084{background-color:#8d2a1e;font-color:white}
  a.navbar-item{background:none!important;border-bottom:3px solid #8d2a1e}
  a.navbar-item:hover {border-bottom:3px solid #ffffff}
</style>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },  
    methods: {
      posLogin(response) {
        var self = this;
        console.log('resposta do login');
        console.log('logado', response);
        var data = response.data;
        if(data && data.id) {
          self.$store.dispatch('setCurrentUser', data);
          self.axios.get('currentusuario/').then((responseUsuario) => {
            console.log('usuario logado');
            console.log(responseUsuario.data);
            //Coloque aqui a rota para quem já está cadastrado
            self.$router.push({ name: 'Home', force:true, reload:true });
          }).catch(function (error) {
            console.log('nao existe usuario cadastrado', error)
            //Coloque aqui a sua rota de cadastro
            self.$router.push({ name: 'Cadastro', force:true, reload:true });
          })
        }
      },
      entrarCadastrar() {
        var provider = new GoogleAuthProvider();
        var self = this;
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            var pass = result.user.uid;
            var email = result.user.email;
            console.log(email, pass);
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', pass);
            
            self.axios.post('login/', formData).then((response) => {
              self.posLogin(response);
            }).catch(function (error) {
              console.log('error', error);
              if (error.response && error.response.data) {
                var user = {
                  username: email,
                  password: pass
                };
                self.axios.post('user-registration/', user).then((responseUr) => {
                  console.log(responseUr);
                  self.axios.post('login/', formData).then((responseLogin) => {
                    self.posLogin(responseLogin);
                  });
                });
              }
              
            });
        }).catch((error) => {
            console.log(error);
        });
      },
      sair() {      
        var self = this;
        this.axios.get('logout/').then((responseLogout) => {
          console.log('logout', responseLogout);
          self.$store.dispatch('setCurrentUser', null);
          self.$router.push({ name: 'Home', force:true, reload:true });
        });
      }
    }
}
</script>