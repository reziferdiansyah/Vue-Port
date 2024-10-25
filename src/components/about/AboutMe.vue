<template>
  <div>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <!-- About profile image -->
      <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
      </div>

      <!-- About details -->
      <div class="w-full sm:w-3/4 text-left">
        <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        >
          {{ bio.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Hi there 👋 I'm Rezi Ferdiansyah. I am a Front end Developer. As a Frontend Developer, I am responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of frameworks and libraries to create the web pages.",
        },
      ],
    };
  },
};
</script>
