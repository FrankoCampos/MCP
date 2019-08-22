import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/users.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader:{
      status: false,
      message: null
    },
    api_response:null
  },
  getters:{
    get_api_response(state){
      return state.api_response;
    },
    get_loader(state){
      return state.loader;
    }

  },
  mutations: {
    SET_API_RESPONSE(state,payload){
      state.api_response = payload;
    },
    SET_LOADER(state, content){
      state.loader.status = content.status;
      state.loader.message = content.message;  
    }
  },
  actions: {
  },
  modules:{
    usersModule
  }
})
