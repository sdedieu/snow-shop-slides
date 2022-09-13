<script>
export default {
  name: "MyBio",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>MANFRED THE MAN</h5>
    </div>
    <div class="grow grid grid-cols-4 gap-2 pb-24 mx-4">
      <div
        class="
          col-span-4
          md:col-span-1
          flex flex-col
          justify-center
          items-center
        "
      >
        <img src="/src/assets/manfred_steyer.png" class="m0 w-1/3 md:w-1/2" />
      </div>
      <div
        class="
          col-span-4
          md:col-span-3
          flex flex-col
          justify-evenly
          items-start
        "
      >
        <a
          class="flex flex-row items-center mx-auto md:mx-0"
          href="https://twitter.com/ManfredSteyer"
        >
          <img src="/src/assets/twitter.png" class="w-8 md:w-16" />
          <div
            class="
              ml-2
              md:ml-8
              break-all
              text-sky-500 text-xl
              md:text-4xl
              font-bold
            "
          >
            @ManfredSteyer
          </div>
        </a>
        <a
          class="flex flex-row items-center mx-auto md:mx-0"
          href="https://github.com/manfredsteyer"
        >
          <img src="/src/assets/github.png" class="w-8 md:w-16" />
          <div
            class="
              ml-2
              md:ml-8
              break-all
              text-black text-xl
              md:text-4xl
              font-bold
            "
          >
            https://github.com/manfredsteyer
          </div>
        </a>
        <a
          class="flex flex-row items-center mx-auto md:mx-0"
          href="https://www.angulararchitects.io/en/"
        >
          <img src="/src/assets/angular-architect.png" class="w-24 md:w-56" />
          <div
            class="
              ml-2
              md:ml-8
              break-all
              text-3xl text-kzn-teal text-xl
              md:text-4xl
              font-bold
            "
          >
            https://www.angulararchitects.io/en/
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.centered-column {
  @apply max-w-fit;
}
</style>