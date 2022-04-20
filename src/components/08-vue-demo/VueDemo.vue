<script>
export default {
  name: "VueDemo",
};
</script>

<template>
  <section id="vue-demo">
    <section id="cover" data-auto-animate>
      <VueDemoCover />
    </section>
    <section id="code-native-element" data-auto-animate>
      <VueDemoCodeNativeElement />
    </section>
    <section id="code-host-router" data-auto-animate>
      <VueDemoCodeHostRouter />
    </section>
    <section id="code-host-wrapper" data-auto-animate>
      <VueDemoCodeHostWrapper />
    </section>
  </section>
</template>

<style>
</style>