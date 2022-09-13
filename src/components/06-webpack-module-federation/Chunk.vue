<script>
export default {
  name: "Chunk",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>WEBPACK</h5>
    </div>
    <div
      class="
        flex flex-col
        grow
          justify-end
        items-evenly
        bg-top bg-bundleyourscript bg-no-repeat bg-contain
      "
    >
      <div
        class="
          h-full
          w-full
          flex flex-row
          items-end
          justify-evenly
          pb-14
        "
      >
        <div class="relative w-52 h-52">
          <div class="absolute module bottom-1 left-12 z-30">Module 1</div>
          <div class="absolute module bottom-3 left-14 z-20">Module 2</div>
          <div class="absolute module bottom-5 left-16 z-10">Module 3</div>
        </div>
        <img class="m0 h-32" src="/src/assets/webpack-arrow.png" alt="" />
        <img class="m0 h-32" src="/src/assets/closed-box.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
div.module {
  @apply w-24
              h-24
              rounded-md
              border border-devoxx-purple
              bg-devoxx-orange
              flex flex-row
              items-center
              justify-center
              text-base
              font-bold;
}
</style>