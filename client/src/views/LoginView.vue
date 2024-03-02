<script setup>
import { reactive } from "vue";
import axiosI from "../axios/axiosInstance.js";

const userLogin = reactive({
  correo: "",
  clave: "",
});

const loginUser = async () => {
  try {
    const res = await axiosI.post("/users/login", userLogin);
    console.log(res);

    const tk = $cookies.get("token");
    console.log(tk);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="text-center m-2">
    <h1 class="text-2xl text-yellow-500">Iniciar Sesión</h1>
  </div>
  <section class="max-w-xs mx-auto my-4 rounded-lg bg-slate-800">
    <div class="flex flex-col justify-center items-center">
      <input
        type="email"
        class="outline-none border-none p-2 m-2 bg-slate-900 rounded-sm"
        placeholder="Correo Electronico"
        v-model="userLogin.correo"
      />
      <input
        type="password"
        class="outline-none border-none p-2 m-2 bg-slate-900 rounded-sm"
        placeholder="Contraseña"
        v-model="userLogin.clave"
      />
    </div>
    <div class="text-center">
      <button
        @click="loginUser"
        class="bg-blue-600 p-1 rounded-lg border-none outline-none hover:bg-blue-500 m-2"
      >
        Ingresar
      </button>
    </div>
  </section>
</template>

<style scoped></style>
