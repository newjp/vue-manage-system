import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../util/storage'

Vue.use(Vuex)

//创建基本状态
const state = {
    adminer: storage.getItem('adminUser') || ''  //登陆管理员
}

const mutations = {
    //管理员登陆
    ADMINLOGIN (state) {
        state.admin = storage.getItem('adminUser');
    },
    ADMINLOGOUT (state) {
        state.adminer = '';
        storage.removeItem('adminUser');
    }
}

//getters
const getters = {
    //count:function(state){
    //    return state.count +=100;
    //}
}

//创建驱动actions可以使得mutations得以启动
const actions = {
    //管理员登陆
    adminlogin ({commit}) {
        commit('ADMINLOGIN')
    },
    //管理员登陆
    adminlogout ({commit}) {
        commit('ADMINLOGOUT')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;