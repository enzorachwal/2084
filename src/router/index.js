import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Perfil from '@/views/perfil.vue';
import Agenda from '@/views/agenda.vue';
import Contato from '@/views/contato.vue';
import Medico from '@/views/medicopov.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil,
        meta: {  }
    },
    {
        path: '/agenda',
        name: 'Consultas',
        component: Agenda,
        meta: {  }
    },
        {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    },     
    {
        path: '/medicopov',
        name: 'Médico',
        component: Medico,
        meta: {  }
    }
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
