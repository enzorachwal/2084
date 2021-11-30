import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: null,
    },
    mutations: {
        setCurrentUser(state, currentUser) {
            state.currentUser = currentUser;
        }
    },
    actions: {
        setCurrentUser({ commit }, currentUser) {
            commit('setCurrentUser', currentUser);
        }
    },
    getters: {
        currentUser: state => {
            return state.currentUser;
        }
    },
    modules: {}
});