<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MainLogo from '../components/MainLogo.vue'
</script>

<template>
  <main class="h-screen overflow-y-hidden flex flex-col items-center justify-center">
    <MainLogo/>
    <p class="mt-20 mb-10 italic">
      Teka-teki silang mini Bahasa Indonesia.<br/>
      Setiap harinya ada teka-teki berbeda.
    </p>
    <RouterLink class="rounded bg-black w-60 p-3 text-white flex items-center justify-center text-sm uppercase font-medium" to="/about">Mulai</RouterLink>
  </main>
</template>
