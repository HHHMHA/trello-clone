<template>
  <component :is="route?.meta?.header ?? ''"></component>
  <RouterView />
  <component :is="route?.meta?.footer ?? ''"></component>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
const route = useRouter()
</script>

<style scoped></style>
