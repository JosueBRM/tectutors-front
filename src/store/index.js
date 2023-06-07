import { createStore } from "vuex";

import tutorsModules from './modules/tutors/index.js';

const store = createStore({
    modules: {
        tutors: tutorsModules
    }
});

export default store;