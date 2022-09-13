<script>
export default {
  name: "FromMonolithicToMicroservice",
};
</script>

<template>
  <section id="from-monolithic-to-microservice">
    <section id="monolithic">
      <Monolithic />
    </section>
    <section id="microservice1" data-auto-animate>
      <ToMicroService1 />
    </section>
    <section id="microservice2" data-auto-animate>
      <ToMicroService2 />
    </section>
    <section id="microservice3" data-auto-animate>
      <ToMicroService3 />
    </section>
    <section id="ddd" data-auto-animate>
      <DDD />
    </section>
  </section>
</template>

<style>
</style>