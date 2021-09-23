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
            <b-navbar-item href="#/">
                Home
            </b-navbar-item>
            <b-navbar-item href="#/contato">
                Contato
            </b-navbar-item>
                    <b-navbar-item href="#/perfil">
                Perfil
            </b-navbar-item>  
                    <b-navbar-item href="#/agenda">
                Consultas
            </b-navbar-item>
                <b-navbar-item href="https://www.fae.edu/">
                Site da Fae
            </b-navbar-item>         
        </template>

    </b-navbar>
    
</template>

<style>
  .nav-2084{background-color:#8d2a1e;font-color:white}
</style>