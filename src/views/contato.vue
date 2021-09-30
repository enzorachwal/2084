<template>

    <section class="section">
        <h1 class="title">Página de contato</h1>
        <h2> Tem alguma dúvida sobre o Projeto 2084? Mande pra gente, estaremos felizes em responder!

        </h2>

        <section class="section">
        <b-field label="Digite seu Nome">
            <b-input placeholder=" " rounded></b-input>
        </b-field>

        <b-field label="Digite seu E-mail">
            <b-input type="email" rounded>
            </b-input>
        </b-field>  


          <b-field label="Message">
              <b-input maxlength="200" type="textarea"></b-input>
          </b-field>
              <div class="buttons">
             <b-button type="is-primary ">Enviar</b-button>  

          </div> 
      </section>
      

    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
</script>