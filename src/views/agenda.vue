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
<table class="table">
  <thead>
    <tr>
      <th>Data</th>
      <th>Hora</th>
      <th>Local</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>10/10/2021</th>
      <td>16h10</td>
      <td>Hospital dos olhos</td>

    </tr>
    <tr>
      <th>16/10/2021</th>
      <td>14h30</td>
      <td>IPO</td>

    </tr>
        <tr>
      <th>21/11/2021</th>
      <td>17h00</td>
      <td>Hospital das Graças</td>

    </tr>
  </tbody>
  </table>  
    </section>

  </section>


</template>

<script>



</script>