<script setup>
import { reactive, ref } from "vue";
import { axiosInstance } from "../axios/axiosInstance.js";

const user = reactive({
  usuario: "",
  correo: "",
  clave: "",
});

const tasks = ref([]);

const guardarUsuario = async () => {
  try {
    const res = await axiosInstance.post("/users", user);
    tasks.value = res.data.mensaje;
  } catch (error) {
    tasks.value = error.response.data.mensaje;
    console.log(error);
  }
};
</script>

<template>
  <div class="text-center m-2">
    <h1 class="text-2xl text-yellow-500">Registrar Usuario</h1>
  </div>
  <section class="max-w-xs mx-auto my-4 rounded-lg bg-slate-800">
    <div class="flex flex-col justify-center items-center">
      <input
        type="text"
        class="outline-none border-none p-2 m-2 bg-slate-900 rounded-sm"
        placeholder="Usuario"
        v-model="user.usuario"
      />
      <input
        type="email"
        class="outline-none border-none p-2 m-2 bg-slate-900 rounded-sm"
        placeholder="Correo Electronico"
        v-model="user.correo"
      />
      <input
        type="password"
        class="outline-none border-none p-2 m-2 bg-slate-900 rounded-sm"
        placeholder="Contraseña"
        v-model="user.clave"
      />
    </div>
    <div class="text-center">
      <button
        @click="guardarUsuario"
        class="bg-blue-600 p-1 rounded-lg border-none outline-none hover:bg-blue-500 m-2"
      >
        Registrar
      </button>
    </div>
  </section>
  <div
    v-if="tasks.length >= 1"
    class="fixed bottom-5 right-5 p-4 bg-slate-800 rounded-lg"
  >
    <p v-for="(task, i) in tasks" :key="i"><span>-</span> {{ task }}</p>
  </div>
</template>

<style scoped></style>
