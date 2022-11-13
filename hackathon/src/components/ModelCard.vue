<template>
    <div class="group rounded overflow-hidden shadow-lg">
        <div class="w-full h-96 w-100" style="background-image: url('./images/model1.jpeg'); background-repeat: no-repeat; background-size: cover;">
        <!-- <img class="w-full" src="../../public/images/model1.jpeg" alt="model.firstName"> -->
            <button class="opacity-0 group-hover:opacity-100">Hello</button>
        </div>



        <!--MODEL INFO-->
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Model Name</div>
            <p class="text-gray-700 text-base">
                Age: 23
            </p>
            <p class="text-gray-700 text-base">
                Race: 23
            </p>
            <p class="text-gray-700 text-base">
                Height: 23
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
    export default {
        name: 'ModelCard',
        props: {
            model: {}
        },
    };
</script>