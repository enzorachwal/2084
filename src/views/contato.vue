<template>

    <section class="section">
        <h1 class="title">Página de contato</h1>
        <h2> Tem alguma dúvida sobre o Projeto 2084? Mande pra gente, estaremos felizes em responder!

        </h2>

        <section class="section">
        <b-field label="Digite seu Nome">
    
            <b-input v-model='contato.nome' placeholder=" " rounded></b-input>
        </b-field>

        <b-field label="Digite seu E-mail">
            <b-input v-model='contato.email' type="email" rounded>
            </b-input>
        </b-field>  


          <b-field label="Message">
              <b-input v-model='contato.mensagem' maxlength="200" type="textarea"></b-input>
          </b-field>
              <div class="buttons">
             <b-button @click='enviar' type="is-primary ">Enviar</b-button>  

          </div> 
      </section>
      

    </section>
</template>

<script>
export default {
    props: ['canCancel'],
    data(){
        return {
            contato: {

            },
        
        }
    },  
    created() {
     
      //Chama a api para buscar as cidades

    },
    methods: {
      enviar() {
          var self = this;
          //Chama a api para criar o usuário
          this.axios.post('create-contato/', this.contato).then((response) => {
            self.contato={};
            console.log(response);
            //Fecha o modal
            self.$emit('close');
            //Mostra a mensagem de sucesso
            self.$buefy.dialog.alert('Email enviado!')
          })        
      }
    }  
}
</script>