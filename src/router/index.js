import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import Perfil from '@/views/perfil.vue';
import Agenda from '@/views/agenda.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
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
    }
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
