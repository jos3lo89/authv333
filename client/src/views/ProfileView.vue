<script setup>
import axiosI from "../axios/axiosInstance.js";

const getProfile = async () => {
  try {
    const res = await axiosI.get("/users/profile/65e12da7a3df692a2d54c3b8");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <h1>mis datos</h1>
  <button @click="getProfile()" class="bg-green-600 p-2 rounded-lgs">
    Pedir datos
  </button>
</template>

<style scoped></style>
