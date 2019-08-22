import axios from 'axios';

export default {
  state: {
    create_user_dialog: false,
    users: [],
    user: {
      id: null,
      username: null,
      modules: [],
      token: null,
    },
    user_to_update: {
      dialog: false,
      user: {
        id: 0,
        username: "",
        modules: [],
        created_at: ""
      }
    },
    user_to_delete: {
      dialog: false,
      id: 0,
      username: ""

    }
  },
  getters: {
    get_user(state) {
      return state.user;
    },
    get_users(state) {
      return state.users;
    },
    get_user_edit(state) {
      return state.user_to_update;
    },
    get_user_delete(state) {
      return state.user_to_delete;
    },
    get_create_user_create_dialog(state) {
      return state.create_user_dialog;
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      //console.log("SET_USERS",payload);
      state.users = [];
      state.users.push(...payload);
    },
    SET_NEW_USER(state, new_user) {
      state.users.unshift(new_user);
    },
    SET_USER_LOGIN(state, user) {
      state.user.id = user.id;
      state.user.username = user.username;
      state.user.modules = user.modules;
      state.user.token = user.token;
    },
    SET_USER_UPDATE(state, user) {
      state.user_to_update.dialog = true;
      state.user_to_update.user.id = user.id;
      state.user_to_update.user.username = user.username;
      state.user_to_update.user.modules = user.modules;
      state.user_to_update.user.created_at = user.created_at;
    },
    SET_DELETE_USER(state, user) {
      state.user_to_delete.dialog = true;
      state.user_to_delete.id = user.id;
      state.user_to_delete.username = user.username;
    },
    UPDATE_USER(state, user) {
      let find_user = -1;
      state.users.map((el, i) => {
        if (el.id === user.id) {
          find_user = i;
        }
      });
      if (find_user != -1) {
        Object.assign(state.users[find_user], user);
      }

    },
    DELETE_USER(state, user) {
      state.users = state.users.filter(el => el.id != user.id);
    },
    CLOSE_DIALOG_USER(state) {
      state.user_to_update.dialog = false;
      state.user_to_update.user.id = 0;
      state.user_to_update.user.username = "";
      state.user_to_update.user.modules = [];
      state.user_to_update.user.created_at = "";
    },
    CLOSE_CONFIRM_DIALOG_USER(state) {
      state.user_to_delete.dialog = false;
      state.user_to_delete.id = 0;
      state.user_to_delete.username = "";
    },
    HANDLE_CREATE_DIALOG(state){
      state.create_user_dialog = !state.create_user_dialog; 
    }
  },
  actions: {
    createUser({ commit, state }, new_user) {
      //console.log("NEW_USER",new_user);
      axios.post("/users/register",
        new_user,
        {
          headers: { 'Authorization': `Bearer ${state.user.token}` }
        })
        .then(response => {
          //console.log("RESP_POST",response);
          commit('SET_API_RESPONSE', { status: response.status, data: response.data });
          commit('SET_LOADER', { status: false, message: "Exitoso" });
          commit("SET_NEW_USER", response.data);
        })
        .catch(error => {
          //console.error("ERROR_POST_LOGIN",error);
          commit('SET_API_RESPONSE', { status: error.response.status, data: error.response.data });
          commit('SET_LOADER', { status: false, message: "Error" });
        });
    },
    getAllUsers({ commit }) {
      axios
        .get("/users")
        .then(response => {
          //console.log("RESP_GETALL",response);
          commit('SET_API_RESPONSE', { status: response.status, data: response.data });
          commit('SET_LOADER', { status: false, message: "Exitoso" });
          commit("SET_USERS", response.data);
        })
        .catch(error => {
          //console.error("ERROR_GET_LOGIN",error);
          commit('SET_API_RESPONSE', { status: error.response.status, data: error.response.data });
          commit('SET_LOADER', { status: false, message: "Error" });
        });
    },
    loginUser({ commit }, passport) {
      axios
        .post(`/users/login`, passport)
        .then(response => {
          //console.log("RESP_LOGIN",response);
          commit('SET_API_RESPONSE', { status: response.status, data: response.data });
          commit('SET_LOADER', { status: false, message: "Exitoso" });
          commit('SET_USER_LOGIN', response.data);
        })
        .catch(error => {
          //console.error("ERROR_POST_LOGIN",error);
          commit('SET_API_RESPONSE', { status: error.response.status, data: error.response.data });
          commit('SET_LOADER', { status: false, message: "Error" });
        });
    },
    updateUser({ commit }, item) {
      axios
        .put(`/users/${item.user.id}`, {
          username: item.user.username,
          modules: item.modules
        })
        .then(response => {
          //console.log("RESP_UPDATE",response);
          commit('SET_API_RESPONSE', { status: response.status, data: response.data });
          commit('SET_LOADER', { status: false, message: "Exitoso" });
          commit('CLOSE_DIALOG_USER');
          commit('UPDATE_USER', response.data);
        })
        .catch(error => {
          //console.error("ERROR_PUT_USER",error);
          commit('SET_API_RESPONSE', { status: error.response.status, data: error.response.data });
          commit('SET_LOADER', { status: false, message: "Error" });
        });

    },
    deleteUser({ commit, state }, id) {
      //console.log("DELETE",state.user.token);
      axios
        .delete(`/users/${id}`, {
          headers: { 'Authorization': `Bearer ${state.user.token}` }
        })
        .then(response => {
          commit('SET_API_RESPONSE', { status: response.status, data: response.data });
          commit('SET_LOADER', { status: false, message: "Exitoso" });
          commit('CLOSE_CONFIRM_DIALOG_USER');
          commit('DELETE_USER', response.data);
        })
        .catch(error => {
          //console.error("ERROR_DELETE_USER",error);
          commit('SET_API_RESPONSE', { status: error.response.status, data: error.response.data });
          commit('SET_LOADER', { status: false, message: "Error" });
        });
    }
  }
};