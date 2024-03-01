<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="text-center p-4 bg-slate-800">
    <nav class="space-x-4">
      <RouterLink :to="{ name: 'home' }" class="text-2xl hover:text-orange-600"
        >Home</RouterLink
      >
      <RouterLink :to="{ name: 'login' }" class="text-2xl hover:text-orange-600"
        >Login</RouterLink
      >
      <RouterLink
        :to="{ name: 'register' }"
        class="text-2xl hover:text-orange-600"
        >register</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped></style>
