export default {
    registerTutor(context, data) {
        const tutorData = {
            id: 'j4',
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas 
        };
        context.commit('registerTutor', tutorData);
    }
};