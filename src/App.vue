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
          <img
            class="absolute bottom-0 w-full z-50 rounded-md bg-black w-36 right-2 voxxed-logo"
            src="/src/assets/voxxed-logo.png"
            alt="Voxxed Days Luxembourg Logo"
          />
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

.voxxed-logo {
  @apply m-2 !important;
}
</style>
