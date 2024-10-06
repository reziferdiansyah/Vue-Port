<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8" />

    <!-- Portofolio -->
    <!-- <PortofolioGrid /> -->

    <!-- Load more Portofolio button -->
    <!-- <div class="mt-10 sm:mt-20 flex justify-center">
      <router-link
        to="/portofolio"
        class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300"
        aria-label="More Portofolio"
      >
        <Button title="More Portofolio" />
      </router-link>
    </div> -->
  </div>
</template>

<script>
import AppBanner from "@/components/shared/AppBanner";
// import PortofolioGrid from "../components/portofolio/PortofolioGrid.vue";
// import Button from "../components/reusable/Button.vue";

export default {
  name: "Home",
  components: {
    AppBanner,
    // PortofolioGrid,
    // Button,
  },
};
</script>

<style scoped></style>
