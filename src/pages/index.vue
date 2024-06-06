<script setup>
  import Parallaxy from '@lucien144/vue3-parallaxy';
  import Main from '../components/main.vue';
  import HavenGuard from '../components/HavenGuard.vue';
  import Cameras from '../components/Cameras.vue';
</script>
<template>
  <section class="relative pb-[160px] overflow-hidden">
    <Main />
    <div class="absolute top-0 z-10 down">
      <Parallaxy :speed="80" class="relative flex justify-start items-center">
        <img src="../assets/parallax.jpg" class="scale-[120%]" />
      </Parallaxy>
    </div>
  </section>
  <HavenGuard />
  <Cameras />
</template>
