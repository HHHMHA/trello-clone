<template>
  <component :is="this.$route?.meta?.header ?? ''"></component>
  <RouterView />
  <component :is="this.$route?.meta?.footer ?? ''"></component>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
