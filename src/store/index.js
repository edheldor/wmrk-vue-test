import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDataEndpointUrl: 'https://rssi.wmrk.tk/',

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
      state.userDataEndpointUrl = "https://leksin-wmrk-test-api-server.herokuapp.com/wmrk/"
    },
    changeDataEndpointUrlToAddedData(state){
      state.userDataEndpointUrl = "https://leksin-wmrk-test-api-server.herokuapp.com/wmrk-added-data/"
    }
  },
  actions: {
  },
  modules: {
  }
})
