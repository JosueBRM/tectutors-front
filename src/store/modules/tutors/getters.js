export default {
    tutors(state) {
        return state.tutors;
    },
    hasTutors(state) {
        return state.tutors && state.tutors.length > 0;
    }
}; 