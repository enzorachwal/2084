<template>
  <div>
  <section class="hero is-primary is-medium">
  <div class="hero-body has-text-centered">
    <p class="title has-text-centered">
      Cuide
    </p>
    <p class="subtitle has-text-centered">
      A sua saúde em primeiro lugar
    </p>
  </div>
  </section>
  

<section class="section is-small">
  <h1 class="title">O que é a Cuide?</h1>
  <h2 class="subtitle is-halflenght">
    A Cuide é uma plataforma que <strong>facilita</strong> o atendimento médico e <strong>conecta</strong> a saúde do paciente no mundo digital, unindo em um só lugar todos os seus diagnósticos, condições, consultas e exames, com o objetivo de simplificar ao máximo o acompamnhamento médico, tanto da perspectiva do paciente quanto do doutor.
  </h2>
</section>

<section class="section is-small">
  <h1 class="title">Como fazemos isso?</h1>
  <h2 class="subtitle is-halflenght">
    A Cuide faz todo esse intermédio entre doutor e paciente duma forma segura, privada e digital, colocando todos os dados no controle do paciente, além disso, a Cuide tem conexões com hospitais e laboratórios, para tornar todo o processo de exames, procedimentos e consultas mais rápido, simples e digital.
  </h2>
</section>

    
<section>
        <b-carousel
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
<section class="section is-medium">
  <h1 class="title">Como Surgiu?</h1>
  <h2 class="subtitle">
    A Cuide surgiu em 2018, quando depois de uma série de eventos que aconteceram com idosos em minha família que me fizeram refletir sobre como todo o processo médico é demorado, burocrático e congestionado. Foi nesse momento que comecei a pensar na digitalização de todo esse universo, prestando atenção nas relações e condições em cada etapa.
  </h2>
</section>




</div>

</template>

<script>
export default {
    data() {
        return {
            arrow: true,
            arrowBoth: false,
            arrowHover: false,
            iconPack: 'mdi',
            iconPrev: 'arrow-left',
            iconNext: 'arrow-right',
            iconSize: '',
            carousels: [
                { title: 'Slide 1', color: 'info' },
                { title: 'Slide 2', color: 'success' },
                { title: 'Slide 3', color: 'warning' },
                { title: 'Slide 4', color: 'danger' }
            ]
        }
    }
}


</script>
