<script>
export default {
  name: "DDD",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>LE DOMAIN DRIVEN DESIGN (DDD)</h5>
    </div>
<div class="grid grow md:gap-4 grid-cols-3">
      <div class="col-span-2 p-1 md:p-4 flex flex-row items-center justify-center">
        <img class="w-full md:w-3/4" src="/src/assets/domain_driven_design.png" alt="" />
      </div>
      <div class="relative p-1 md:p-12 flex flex-row items-center justify-center">
         <img class="w-full md:w-3/4" src="/src/assets/ddd_eric_evans.jpeg" alt="" />
        <img
          class="absolute left-0 bottom-8 md:bottom-0 w-2/3 md:w-1/2"
          src="/src/assets/enterprise_angular_microfrontends.webp"
          alt=""
        />
      </div>
    </div>
    <div class="absolute bottom-2 left-24 text-sm text-devoxx-cyan">
      Schéma tiré du livre "DDD, Nx Monorepos and Micro Frontends" – Manfred
      Steyer
    </div>
  </div>
</template>

<style>

</style>