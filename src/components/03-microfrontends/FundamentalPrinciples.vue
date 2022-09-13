<script>
export default {
  name: "FundamentalPrinciples",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>FUNDAMENTAL PRINCIPLES</h5>
    </div>
    <div class="grow sm:pb-16 pb-12 flex flex-col">
      <div class="grid grow md:gap-4 grid-cols-3">
        <div
          class="
            col-span-2
            p-1
            md:p-4
            flex flex-row
            items-center
            justify-center
          "
        >
          <img
            class="w-full md:w-3/4"
            src="/src/assets/mf_principles.png"
            alt=""
          />
        </div>
        <div class="p-1 md:p-12 flex flex-row items-center justify-center">
          <img
            class="w-full md:w-3/4"
            src="/src/assets/luca_mezzalira_building_mf.jpeg"
            alt=""
          />
        </div>
      </div>
      <div class="left-24 text-sm text-devoxx-cyan">
        Schema from the book "Building Micro-frontends" – Luca Mezzalira
      </div>
    </div>
  </div>
</template>

<style>
</style>