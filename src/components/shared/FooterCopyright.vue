<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; 2022 Allrights reserved. Developed by
      <a
        href="https://www.instagram.com/reziferdiansyahhh/"
        target="__blank"
        class="underline font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      //   copyrightDate: new Date().getFullYear(),
      author: "Rezi Ferdiansyah",
    };
  },
};
</script>

<style lang="scss" scoped></style>
