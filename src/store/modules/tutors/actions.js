export default {
    registerTutor(context, data) {
        const tutorData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas 
        };
        context.commit('registerTutor', tutorData);
    }
};