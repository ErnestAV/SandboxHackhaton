<template>
    <div>
        <CardList :models="modelList"></CardList>
    </div>
</template>

<script>
import CardList from '../components/CardList.vue'
import { allModels } from '../services/models'
export default {
    name: 'Discover',
    components: {
        CardList,
    },
    methods: {
        async getAllModels() {
            const res = await allModels();
            this.modelList = res;
            console.log(this.modelList);
            this.isLoading = false;
        }
    },
    data() {
       return {
         modelList: [],
         isLoading: true
       }
    },
    created() {
        this.getAllModels();

    }
}
</script>