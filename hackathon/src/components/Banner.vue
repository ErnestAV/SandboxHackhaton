<template>
  <div class="banner">
    <div class="flex flex-row space-x-1 justify-center">
      <div class="justify-center items-center w-full p-10">
        <div class="box-content h-80 w-100 text-center rounded-lg" style="background-image: url('./images/business.jpg');">
          <button class="box-content text-4xl h-80 w-full border-1 text-center duration-300 rounded hover:bg-gray-600 hover:-translate-y-1 hover:underline hover:bg-opacity-50 hover:scale-110 transition ease-in-out delay-150 text-white">
            <p>I'm a</p>
            <router-link to="/discover">
              <p class="text-6xl font-bold">Professional</p>
            </router-link>
          </button>
        </div>
      </div>
      <div class="justify-center items-center w-full p-10">
        <div class="box-content h-80 w-100 text-center rounded-lg" style="background-image: url('./images/model.jpg');">
          <button class="box-content text-4xl h-80 w-full border-1 text-center duration-300 rounded hover:bg-gray-600 hover:bg-opacity-50 hover:underline hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 text-white">
            <p>I'm a</p>
            <router-link to="/signup">
              <p class="text-6xl font-bold">Model</p>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  // props: {
  //   msg: String
  // }
}
</script>