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
        </template>
<template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="#/perfil" class="button is-primary">
                        <strong>Cadastro</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>


    </b-navbar>
    
</template>

<style>
  .nav-2084{background-color:#8d2a1e;font-color:white}
  a.navbar-item{background:none!important;border-bottom:3px solid #8d2a1e}
  a.navbar-item:hover {border-bottom:3px solid #ffffff}
</style>