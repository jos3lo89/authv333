<script setup>
import axiosI from "../axios/axiosInstance.js";

const logout = async () => {
  try {
    const res = await axiosI.post("/users/logout");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <h1 class="text-center m-4 text-2xl">Inicio</h1>
  <div>
    <button @click="logout()" class="bg-yellow-600 p-1 rounded-lg hover:bg-yellow-700">cerrar sesion</button>
  </div>
</template>
