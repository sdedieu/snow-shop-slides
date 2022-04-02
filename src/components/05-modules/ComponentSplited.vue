<script>

export default {
  name: "ComponentSplited",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>ARCHITECTURE MICROSERVICE</h5>
    </div>
    <div
      class="
        flex flex-row
        grow
        items-center
        justify-evenly
        mx-4
        md:mx-32
        lg:mx-80
        relative
      "
    >
      <img class="w-14" src="/src/assets/html.png" alt="" />
      <img class="w-14" src="/src/assets/javascript.png" alt="" />
      <img class="w-14" src="/src/assets/css.png" alt="" />
      <div
        class="
          hidden
          absolute
          bg-devoxx-orange
          flex flex-row
          items-center
          border-dashed border-2 border-devoxx-orange
          justify-center
          h-1/2
          w-full
          rounded-md
          bg-opacity-50
        "
      >
        Component
      </div>
    </div>
  </div>
</template>

<style>
</style>