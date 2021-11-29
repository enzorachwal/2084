<template>
  <div>
    <section class="section">
        <h1 class="title">Você!</h1>
    <div class="columns">
    
        <div class="column is-4">
         <b-field class="file is-primary" :class="{'has-name': !!file}">
        <b-upload v-model="file" class="file-label">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-upload>
    </b-field>
        </div>
        <div class="column">
 
        <form class="box">
  <div class="field">
    <label class="label">Nome Completo</label>
    <div class="control">
      <input class="input" v-model='medico.nome' >
    </div>
  </div>

    <div class="field">
    <label class="label">Especiaplidade</label>
    <div class="control">
      <input class="input" placeholder=" " v-model='medico.especialidade'>
    </div>
  </div>

  <div class="field">
    <label class="label">CRM</label>
    <div class="control">
      <input class="input" placeholder="00000" v-model='medico.crm'>
    </div>
  </div>

</form>
        </div>
    </div>   

          <div class="buttons">
             <b-button type="is-primary is-light" @click='cadastrar'>Salvar</b-button>  

          </div>  
      </section>



       
   

  </div>
</template>

<script>
export default {
    props: ['canCancel'],
    data(){
        return {
            medico: {

            },
        
        }
    },  
    created() {
     
      //Chama a api para buscar as cidades

    },
    methods: {
      cadastrar() {
          var self = this;
          //Chama a api para criar o usuário
          this.axios.post('create-medico/', this.medico).then((response) => {
            console.log(response);
            //Fecha o modal
            self.$emit('close');
            //Mostra a mensagem de sucesso
            self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
          })        
      }
    }  
}
</script>