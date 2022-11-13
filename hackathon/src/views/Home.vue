<template>
  <div class="home w-full">
    <Banner/>
    <CompanyGallery/>
    <ModelsCarousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import CompanyGallery from '@/components/CompanyGallery.vue'
import ModelsCarousel from '@/components/ModelsCarousel.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    CompanyGallery,
    ModelsCarousel
  }
}
</script>
