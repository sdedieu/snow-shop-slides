<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <div class="absolute px-3 py-2 bottom-0 w-full bg-gradient-to-r from-kzn-apple/75 via-kzn-teal/75 to-kzn-cyan/75 z-50 flex items-center justify-between footer"> 
          <img
            class="left-4 w-8 logo"
            src="/src/assets/Logo-Kaizen-black.png"
            alt="Kaizen Logo Black"
          />
          <img
            class="rounded-md w-24 logo"
            src="/src/assets/Devoxx.png"
            alt="Devoxx Logo"
          />
          </div>
        <Cover />
        <Bio />
        <FromMonolithicToMicroservice />
        <Microfrontends />
        <OurChallenge />
        <Modules />
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

img.logo {
  @apply m-0 !important
}
</style>
