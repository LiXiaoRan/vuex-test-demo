import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 初始化A和B组件的数据，等待获取
  AMsg: '',
  BMsg: '',
  messArray:[]
}

const getters = {
  messArray_get:state=>state.messArray,
}

const mutations = {
  receiveAMsg(state, payload) {
    // 将A组件的数据存放于state
    state.AMsg = payload.AMsg
  },
  receiveBMsg(state, payload) {
    // 将B组件的数据存放于state
    state.BMsg = payload.BMsg
  },

  modifyArray(state, obj){
    state.messArray=obj.messArray
    // Vue.$set(this,this.messArray,[...obj.messArray])
  }
}
const actions={
  modifyArr(context,obj){
    context.commit('modifyArray',obj)
  },
  receiveAMsgA(context,obj){
    context.commit('receiveAMsg',obj)
  },
  modifyArrayA(context,obj){
    context.commit('modifyArray',obj)
  }
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  
})
