import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo.js'

// use는 뷰의 플러그인 기능
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todo
    }
});