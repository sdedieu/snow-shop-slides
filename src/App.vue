<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <img
          class="absolute bottom-0 left-4 w-16 z-50"
          src="/src/assets/Logo-Kaizen-black.png"
          alt="Kaizen Logo Black"
        />
        <Cover />
        <Bio />
      <!--  <FromMonolithicToMicroservice /> -->
        <Microfrontends />
     <!--   <OurChallenge /> -->
      <!--  <Modules /> -->
        <WebPackModuleFederation />
        <AngularDemo />
        <VueDemo />
        <ReactDemo />
        <AngularJsDemo />
        <Thankings />
      </div>
    </div>
  </div>
</template>

<style>
#app,
section {
  @apply w-full h-full;
}
</style>
