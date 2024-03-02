<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="text-center p-4 bg-slate-800">
    <nav class="space-x-4">
      <RouterLink :to="{ name: 'home' }" class="text-2xl hover:text-orange-600"
        >Inicio</RouterLink
      >
      <RouterLink :to="{ name: 'login' }" class="text-2xl hover:text-orange-600"
        >Login</RouterLink
      >
      <RouterLink
        :to="{ name: 'register' }"
        class="text-2xl hover:text-orange-600"
        >Register</RouterLink
      >
      <RouterLink
        :to="{ name: 'profile' }"
        class="text-2xl hover:text-orange-600"
        >Mi perfil</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped></style>
