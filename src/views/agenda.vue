<template>

  <section class="section">
        <h1 class="title">Suas Consultas</h1>
        <h2> Veja aqui suas consultas marcadas, horários e locais! </h2>


    <section class="section">
        <b-field>
            <b-datepicker
                ref="datepicker"
                expanded
                placeholder="Select a date">
            </b-datepicker>
            <b-button
                @click="$refs.datepicker.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>
  
    </section>

    <section>
<table class="table is-bordered is-striped is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th>Data</th>
      <th>Hora</th>
      <th>Local</th>
      <th>Médico</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='(consulta,index) in consultas' :key='index' >
      <th>{{consulta.data}}</th>
      <td>{{consulta.hora}}</td>
      <td>{{consulta.local}}</td>
      <td>
        {{consulta.medico.nome}} - {{consulta.medico.crm}}
      </td>

    </tr>

  </tbody>
  </table>  
    </section>

  </section>


</template>

<script>
    export default {
        data() {
            return {
                consultas: []
            }
        },
        
        created() {
          var self = this;
          this.axios.get('consultas/').then((response) => {
            self.consultas = response.data;
          })
        }
        
        
        
    }


</script>