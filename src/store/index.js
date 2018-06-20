import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { getStore } from '../config/wutils'

//挂载Vuex
Vue.use(Vuex)

const state = {
    currTopNav: getStore('currTopNav') || 'globalControl',              //当前顶部导航
    currLanguage: '',                                                   //当前系统语言
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
