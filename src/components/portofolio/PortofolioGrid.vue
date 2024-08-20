<template>
  <!-- Portofolio grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Portofolio grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ portofolioHeading }}
      </p>
    </div>

    <!-- Portofolio grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <PortofolioSingle
        v-for="portofolio in portofolio"
        :key="portofolio.id"
        :portofolio="portofolio"
      />
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";

import PortofolioSingle from "./PortofolioSingle.vue";
import portofolio from "../../data/portofolio";

export default {
  components: { PortofolioSingle },
  data: () => {
    return {
      portofolio,
      portofolioHeading: "Portfolio",
    };
  },

  mounted() {
    feather.replace();
  },
};
</script>

<style scoped></style>
