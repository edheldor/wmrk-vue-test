import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDataEndpointUrl: process.env.VUE_APP_USER_DATA_ENDPOINT_URL,

  },

  getters: {
    userDataEndpointUrl: function (state) {
      //так как https://rssi.wmrk.tk/ не отдает заголовок Access-Control-Allow-Origin, CORS policy не дают сделать запрос из браузера,
      //поэтому использую свой сервер, который подгружает данные с https://rssi.wmrk.tk/ и проставляет заголовок Access-Control-Allow-Origin: "*"
      return state.userDataEndpointUrl;


    }
  },
  mutations: {
    changeDataEndpointUrlToOriginalWrapped(state){
      state.userDataEndpointUrl = process.env.VUE_APP_USER_DATA_ENDPOINT_URL
    },
    changeDataEndpointUrlToAddedData(state){
      state.userDataEndpointUrl = process.env.VUE_APP_USER_DATA_ENDPOINT_URL_ADDED_DATA
    }
  },
  actions: {
  },
  modules: {
  }
})
