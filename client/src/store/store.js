import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

var config = {
  apiKey: 'AIzaSyAeUdvjc5b0Fw7-hzISYnccLdniA1qeG9k',
  authDomain: 'kamban-adnin.firebaseapp.com',
  databaseURL: 'https://kamban-adnin.firebaseio.com',
  projectId: 'kamban-adnin',
  storageBucket: 'kamban-adnin.appspot.com',
  messagingSenderId: '799454785901'
}
firebase.initializeApp(config)
var db = firebase.database()
export const store = new Vuex.Store({
  state: {
    count: 0,
    hari: 1,
    task: {}
  },
  mutations: {
    setTask (state, payload) {
      state.task = payload
    }
  },
  actions: {
    newTask (context, payload) {
      // db.ref('task').push({
      //   apa: payload
      // })
    },
    getTask ({commit}) {
      db.ref('task').on('value', function (snapshot) {
        console.log(snapshot.val())
        commit('setTask', snapshot.val())
      })
    }
  }
})
