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
    id: [],
    task: [],
    data: []
  },
  mutations: {
    setTask (state, payload) {
      state.task = Object.values(payload)
      state.id = Object.keys(payload)
      state.data = Object.entries(payload)
    }
  },
  actions: {
    newTask (context, payload) {
      console.log(payload)
      db.ref('task').push(payload)
    },
    getTask ({commit}) {
      db.ref('task').on('value', function (snapshot) {
        var hasil = Object.entries(snapshot.val())
        console.log(hasil[1][1])
        commit('setTask', snapshot.val())
      })
    },
    todo ({commit}, payload) {
      payload[1].status = 'todo'
      console.log(payload[1])
      db.ref('task/' + payload[0]).set(payload[1])
    },
    done ({commit}, payload) {
      payload[1].status = 'done'
      console.log(payload[1])
      db.ref('task/' + payload[0]).set(payload[1])
    },
    doing ({commit}, payload) {
      payload[1].status = 'doing'
      console.log(payload[1])
      db.ref('task/' + payload[0]).set(payload[1])
    },
    backlog ({commit}, payload) {
      payload[1].status = 'backlog'
      console.log(payload[1])
      db.ref('task/' + payload[0]).set(payload[1])
    },
    deleteTask ({commit}, payload) {
      db.ref('task/' + payload[0]).remove()
    }
  },
  getters: {
    backlog: state => {
      return state.data.filter(task => {
        console.log('masuk back log')
        return task[1].status === 'backlog'
      })
    },
    done: state => {
      return state.data.filter(task => {
        return task[1].status === 'done'
      })
    },
    todo: state => {
      return state.data.filter(task => {
        return task[1].status === 'todo'
      })
    },
    doing: state => {
      return state.data.filter(task => {
        return task[1].status === 'doing'
      })
    }
  }
})
