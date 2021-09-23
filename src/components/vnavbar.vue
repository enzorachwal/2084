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
            <b-navbar-item href="#/contato" class="has-text-white">
                Contato
            </b-navbar-item>
                    <b-navbar-item href="#/perfil" class="has-text-white">
                Perfil
            </b-navbar-item>  
                    <b-navbar-item href="#/agenda" class="has-text-white">
                Consultas
            </b-navbar-item>
                <b-navbar-item href="https://www.fae.edu/" class="has-text-white">
                Site da Fae
            </b-navbar-item>         
        </template>

    </b-navbar>
    
</template>

<style>
  .nav-2084{background-color:#8d2a1e;font-color:white}
  a.navbar-item{background:none!important;border-bottom:3px solid #8d2a1e}
  a.navbar-item:hover {border-bottom:3px solid #ffffff}
</style>