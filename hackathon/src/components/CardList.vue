<template>
    <div class="w-full">
        <div class="mt-4 justify-center items-center w-full flex flex-wrap">
            <!-- <div v-for="model in showList" :key="model">
                <ModelCard :model="model" />
            </div> -->
            <div class="w-1/3 p-5">
                <ModelCard />
            </div>
            <div class="w-1/3 p-5">
                <ModelCard />
            </div>
            <div class="w-1/3 p-5">
                <ModelCard />
            </div>
            <div class="w-1/3 p-5">
                <ModelCard />
            </div>
        </div>
    </div>
</template>

<script>
    import ModelCard from './ModelCard.vue'
    export default {
        name: 'CardList',
        props: {
            models: {
                type: Array,
            },
        },
        components: {
            ModelCard,
        },
        computed: {
            showList() {
                return JSON.parse(JSON.stringify(this.modelList));
            },
        },

    };
</script>