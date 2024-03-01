import { axiosInstance } from "../axios/axiosInstance.js";
import { ref } from "vue";
class saveUser {
  constructor() {
    this.data = ref([]);
  }

  getData() {
    return this.data.value;
  }

  async usersave(datosuser) {
    try {
      const response = await axiosInstance.post("/users", datosuser);
      const data = await response.json();
      this.data.value = data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default saveUser;
