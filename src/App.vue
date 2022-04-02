<script>


export default {
  name: "App"
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

       <!-- <section data-markdown>
          <textarea data-template>
            # Slide 1
            > A paragraph with some text and a [link](http://hakim.se).
          </textarea>
        </section>
        <section data-markdown>
          <textarea data-template>
            ```js [1-2|3|4]
            let a = 1;
            let b = 2;
            let c = x => 1 + 2 + x;
            c(3);
            ```
          </textarea>
        </section>
        <section>Slide 1</section>
        <section>Slide 2</section>
        -->
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
