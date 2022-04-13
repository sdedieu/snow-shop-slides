<script>
export default {
  name: "WebpackModuleFederation",
};
</script>

<template>
  <section id="webpack-module-federation">
    <section id="cover">
      <WebPackCover />
    </section>
    <section id="chunk" data-auto-animate>
      <Chunk />
    </section>
    <section id="bundle" data-auto-animate>
      <Bundle />
    </section>
    <section id="remote-chunk" data-auto-animate>
      <RemoteChunk />
    </section>
    <section id="config">
      <Config />
    </section>
    <section id="when-to-use-it">
      <WhenToUseIt />
    </section>
  </section>
</template>

<style>
</style>