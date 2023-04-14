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

        switchCallType(state, value) {
            state.userData.calltype = value;
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

        updateNotification(state, value) {
            state.userData.sendMethod = value;
        },

        updateRedirect(state, value) {
            state.userData.redirecttarget = value;
        },

        updateTimezone(state, value) {
            state.userData.timezone = value;
        },

        updateTimezoneString(state, value) {
            state.userData.timezonestring = value;
        },

        switchLockLent(state, value) {
            state.userData.locklentaupdate = value;
        },

        switchColorLent(state, value) {
            state.userData.colorlenta = value;
        },
    },
    actions: {
        fetchUserData({ commit }) {
            Queries.getUserDataById(USER_ID)
                .then((user) => {
                    commit("setUserData", user.data);
                })
                .catch((err) => console.log(err));
        },
    },
    modules: {},
});
