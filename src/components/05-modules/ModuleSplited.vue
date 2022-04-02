<script>
export default {
  name: "ModuleSplited",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>ARCHITECTURE MICROSERVICE</h5>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 grow mx-4 md:mx-32 lg:mx-52"
    >
      <div class="flex-1 flex flex-row items-center justify-evenly relative">
        <img class="w-14" src="/src/assets/html.png" alt="" />
        <img class="w-14" src="/src/assets/javascript.png" alt="" />
        <img class="w-14" src="/src/assets/css.png" alt="" />
        <div
          class="
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
          Component A
        </div>
      </div>
      <div class="flex-1 flex flex-row items-center justify-evenly relative">
        <img class="w-14" src="/src/assets/html.png" alt="" />
        <img class="w-14" src="/src/assets/javascript.png" alt="" />
        <img class="w-14" src="/src/assets/css.png" alt="" />
        <div
          class="
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
          Component B
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>