export default {
    tutors(state) {
        return state.tutors;
    },
    hasTutors(state) {
        return state.tutors && state.tutors.length > 0;
    }, 
    isTutor(_, getters, _2, rootGetters) {
        const tutors = getters.tutors;
        const userId = rootGetters.userId;
        return tutors.some(tutor => tutor.id === userId);
    }
}; 