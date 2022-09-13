<script setup lang="ts">
</script>

<template>
  <section id="cover">
    <div class="slide-cover">
      <div class="slide-title">
        <h2>Microfrontend using Webpack 5 Module Federation</h2>
      </div>
      <div>
        <img
          class="kaizen-logo"
          src="/src/assets/Logo-Kaizen-couleurs.png"
          alt="Logo Kaizen White"
        />
      </div>
     <div class="qr-code">
        <img class="m0" src="/src/assets/qrc.png" alt="Slides QR Code" />
      </div>
    </div>
  </section>
</template>

<style>
#cover {
  @apply bg-cover bg-laptop;
}

#cover div img.kaizen-logo {
  @apply m-auto w-48 mt-8;
}

#cover div.qr-code {
  @apply absolute bottom-12 right-0 m-4 w-16 m-6 md:w-44;
}
</style>