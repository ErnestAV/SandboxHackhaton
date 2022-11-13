<template>
    <div class="group rounded overflow-hidden shadow-lg">
        <div class="flex justify-end w-full h-40 w-100" v-bind:style="{'background-image': 'url(' + business.image + ')', 'background-repeat': 'no-repeat', 'background-size': 'contain' }">
        <!-- <img class="w-full" src="../../public/images/model1.jpeg" alt="model.firstName"> -->
            <button class="opacity-0 group-hover:opacity-100 bg-white hover:bg-gray-100 rounded-full w-20 h-20 m-1 align"
                style="background-image: url('./message.jpg'); background-repeat: no-repeat; background-size: cover;" @click="sendEmail">
            </button>
        </div>



        <!--MODEL INFO-->
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{business.name}}</div>
            <p class="text-gray-700 text-base">
                Looking For: {{business.lookingFor}}
            </p>
            <p class="text-gray-700 text-base">
                Date: {{business.date}}
            </p>
            <p class="text-gray-700 text-base">
                Location: {{business.location}}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
</template>

<script>
    import emailjs from '@emailjs/browser';
    export default {
        name: 'BusinessCard',
        props: {
            business: {}
        },
        methods: {
            sendEmail() {
                emailjs.init('Ix3x0zH-EKTRe6yA1');
                emailjs.send("service_nucwgok","template_rj5g3px",{
                to_name: this.business.name,
                from_name: "Kat Johnson",
                to_email: "tjmadmax111@gmail.com",
                reply_to: "tjmaxwell157@gmail.com",
                }).then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            }
        }
    };
</script>