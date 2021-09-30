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
      <input class="input">
    </div>
  </div>

  <div class="field">
    <label class="label">Tipo Sanguíneo</label>
    <div class="control">
      <input class="input" placeholder=" ">
    </div>
  </div>
    <div class="field">
    <label class="label">Idade</label>
    <div class="control">
      <input class="input" placeholder=" ">
    </div>
  </div>
  <div class="field">
    <label class="label">R.G.</label>
    <div class="control">
      <input class="input" placeholder="00.000.000-0">
    </div>
  </div>
  <div class="field">
    <label class="label">CPF</label>
    <div class="control">
      <input class="input" placeholder="000.000.000-00">
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder=" alex@example.com">
    </div>
  </div>


</form>
        </div>
    </div>   
    <section class="section">
      <h1 class="title has-text-primary"> Condições Médicas Relevantes </h1>   <b-field label="">
             <b-input maxlength="200" type="textarea"></b-input>
          </b-field>
          <div class="buttons">
             <b-button type="is-primary is-light">Salvar </b-button>  

          </div>  
      </section>
          <section class="section">
      <h1 class="title has-text-primary"> Histórico Médico </h1>
         <b-field label="">
             <b-input maxlength="200" type="textarea"></b-input>
          </b-field>

          <div class="buttons">
             <b-button type="is-primary is-light">Salvar </b-button>  

          </div>   
      </section>
    </section>

       
   

  </div>
</template>
