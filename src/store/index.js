import Vue from 'vue'
import Vuex from 'vuex'
// import DB from "../db.json"
import EXPDB from "../exp.json"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // characters:[],
    // series:[],
    // character:[], // 클릭한 캐릭터로 데이터 값 변경
    // operations:[],
    exp:[]
  },
  mutations: {
    setDB(state,data){
        // state.characters=data.characters;
        // state.series=data.series;
        // state.operations=data.operations;
        state.exp=data.exp;
      },
    // set_character(state,data){
    //   state.character=data;
    // }
  },
  actions: {
    dbInit({commit}){
      // let res = DB
      let res2 = EXPDB
      // commit('setDB',res)
      commit('setDB',res2)
    },
    // change_character({commit},values){
    //   commit('set_character',values)
    // }
  },
  modules: {
  }
})
