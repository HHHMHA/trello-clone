<template>
  <component :is="$route?.meta?.header ?? 'template'"></component>
  <main class="main-contents">
      <RouterView />
  </main>
  <component :is="$route?.meta?.footer ?? 'template'"></component>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
