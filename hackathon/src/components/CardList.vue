<template>
    <div class="w-full">
        <div class="mt-4 justify-center items-center w-full flex flex-wrap">
            <div v-for="model in modelList" :key="model" class="w-1/3 p-5">
                <ModelCard :model="model" />
            </div>
        </div>
    </div>
</template>

<script>
    import ModelCard from './ModelCard.vue'
    export default {
        name: 'CardList',
        props: {
            // models: {
            //     type: Array,
            // },
        },
        components: {
            ModelCard,
        },
        data() {
            return {
                modelList: [
                {
                    firstName: 'Abby',
                    lastName: 'Theler',
                    age: 24,
                    ethnicity: 'Caucasian',
                    height: '5\'6"',
                    image: './images/model1.jpeg',
                },
                {
                    firstName: 'Kat',
                    lastName: 'Johnson',
                    ethnicity: 'African American',
                    age: 22,
                    height: '5\'8"',
                    image: './images/model5.png',
                },
                {
                    firstName: 'Jonah',
                    lastName: 'Chatelain',
                    ethnicity: 'African American',
                    age: 21,
                    height: '6\'1"',
                    image: './images/dude.png',
                },
                {
                    firstName: 'Kenzie',
                    lastName: 'Shaw',
                    ethnicity: 'Caucasian',
                    height: '5\'4"',
                    age: 26,
                    image: './images/model2.jpeg',
                },
                {
                    firstName: 'Emma',
                    lastName: 'Smith',
                    ethnicity: 'Caucasian',
                    height: '5\'5"',
                    age: 20,
                    image: './images/model3.jpg',
                },
                {
                    firstName: 'Abby',
                    lastName: 'Lewis',
                    ethnicity: 'Caucasian',
                    height: '5\'5"',
                    age: 23,
                    image: './images/gal1.png',
                },
                ]
            };
        },
        computed: {
            showList() {
                return JSON.parse(JSON.stringify(this.modelList));
            },
        },

    };
</script>