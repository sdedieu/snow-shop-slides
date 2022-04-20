<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <div class="reveal">
      <div class="slides relative">
         <img
          class="absolute top-0 left-4 w-52 m0 z-50"
          src="/src/assets/logo_devoxx_fr_2022.png"
          alt="Devoxx Logo Color"
        />
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
          <img
          class="absolute bottom-0 w-full m0 h-4 z-20"
          src="/src/assets/separateur.png"
          alt="Devoxx bottom separator"
        />
          <img
          class="absolute bottom-0 right-0 m0 h-52 z-20"
          src="/src/assets/fond_site_web.png"
          alt="Devoxx fond site web"
        />
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
