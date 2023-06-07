<template>
    <section>FILTER</section>
    <section>
    
    <div class="controls">
        <button>Refresh</button>
        <RouterLink to="/register">Register as Tutor</RouterLink>
    </div>
    <ul v-if="hasTutors">
        <li v-for="tutor in filteredTutors" :key="tutor.id">
            {{ tutor.firstName }}
        </li>
    </ul>
    <h3 v-else>No tutors found.</h3>    

    </section>
</template>

<script>
export default {
    computed: {
        filteredTutors(){
            return this.$store.getters['tutors/tutors'];
        },
        hasTutors() {
            return this.$store.getters['tutors/hasTutors'];
        }
    }
}
</script>