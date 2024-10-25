<template>
    <div>
      <!-- About me -->
      <div class="container mx-auto">
        <Experience />
      </div>
    </div>
  </template>
  
  <script>
  import Experience from "@/components/experience/Experience";
  import feather from "feather-icons";
  
  export default {
    name: "About",
    components: {
      Experience,
    },
    data: () => {
      return {};
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
  </script>
  
  <style scoped></style>
  