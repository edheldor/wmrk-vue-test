import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDataEndpointUrl: 'https://rssi.wmrk.tk/',
    userDataLocalTestEndpointUrl: 'http://192.168.7.107:3000/' //для разработки
  },

  getters: {
    userDataEndpointUrl: function (state) {
      //так как https://rssi.wmrk.tk/ не отдает заголовок Access-Control-Allow-Origin, CORS policy не дают сделать запрос из браузера,
      // поэтому использую 'https://cors-anywhere.herokuapp.com/' для обхода этого ограничения
      //return 'https://cors-anywhere.herokuapp.com/' + state.userDataEndpointUrl

      return state.userDataLocalTestEndpointUrl;


    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
