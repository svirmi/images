import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
      api.login();
    },
    finalizeLogin({ commit }, hash){
        const queryParams = qs.parse(hash.replace('#',''));
        const token = queryParams.access_token;
        commit('setToken', token);
        window.localStorage.setItem('imgur_token', token);
    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}