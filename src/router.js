import { createRouter, createWebHistory } from "vue-router";

//Tutors components
import TutorDetail from './pages/tutors/TutorDetail.vue';
import TutorRegistration from './pages/tutors/TutorRegistration.vue';
import TutorsList from './pages/tutors/TutorsList.vue';

//Requests components
import ContactTutor from './pages/requests/ContactTutor.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect: '/tutors' },
        { path:'/tutors', component: TutorsList },
        { 
          path:'/tutors/:id',
          component: TutorDetail,
          props: true,
          children: [
            { path:'contact', component: ContactTutor }
          ] 
        },
        { path:'/register', component: TutorRegistration },
        { path:'/requests', component: RequestsRecieved },
        { path:'/:notFound(.*)', component: NotFound }
    ]
});

export default router;