<template>
    <div class="w-full">
        <div class="mt-4 justify-center items-center w-full flex flex-wrap">
            <div v-for="business in businessList" :key="business" class="w-1/3 p-5">
                <BusinessCard :business="business" />
            </div>
        </div>
    </div>
</template>

<script>
    import BusinessCard from './BusinessCard.vue'
    export default {
        name: 'CardList',
        props: {
            // models: {
            //     type: Array,
            // },
        },
        components: {
            BusinessCard,
        },
        data() {
            return {
                businessList: [
                {
                    name: 'Cotopaxi',
                    lookingFor: 'Female African American',
                    date: 'December 24, 2022',
                    location: 'Salt Lake City, UT',
                    image: './images/companiesGallery/cotopaxi.webp',
                },
                {
                    name: 'Nani Swimwear',
                    lookingFor: 'Female Caucasian',
                    date: 'November 30, 2022',
                    location: 'Provo, UT',
                    image: './images/companiesGallery/naniswimwear.png',
                },
                {
                    name: 'Piper & Scoot',
                    lookingFor: 'Male African American ',
                    date: 'December 3, 2022',
                    location: 'Salt Lake City, UT',
                    image: './images/companiesGallery/piperscoot.webp',
                },
                {
                    name: 'Soel',
                    lookingFor: 'Female Caucasian',
                    date: 'November 18, 2022',
                    location: 'Las Vegas, NV',
                    image: './images/companiesGallery/soel.png',
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