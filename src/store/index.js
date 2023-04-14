import Vue from "vue";
import Vuex from "vuex";
import Queries from "../services/queries.services";
import { USER_ID } from "../utils/consts";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData: null,
    },
    getters: {},
    mutations: {
        setUserData(state, payload) {
            state.userData = payload;
        },

        updateCompanyName(state, value) {
            state.userData.companyname = value;
        },

        updateLogin(state, value) {
            state.userData.login = value;
        },

        updatePhone(state, value) {
            state.userData.phone = value;
        },

        updateName(state, value) {
            state.userData.fname = value;
        },

        updateSurname(state, value) {
            state.userData.lname = value;
        },

        updateSendMethod(state, value) {
            state.userData.sendMethod = value;
        },
    },
    actions: {
        fetchUserData({ commit }) {
            Queries.getUserById(USER_ID).then((user) => {
                commit("setUserData", user.data);
            });
        },
    },
    modules: {},
});
