import { createStore } from "vuex";

import tutorsModules from './modules/tutors/index.js';

const store = createStore({
    modules: {
        tutors: tutorsModules
    },
    state() {
      return{
        userId: 't3'
      };   
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;