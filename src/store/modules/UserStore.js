import { defineStore } from "pinia";
import usersGenerator from "../../utils/usersGenerator";

const useUserStore = defineStore("userStore", {
  state: () => ({
    users: usersGenerator(100)
  }),

  getters: {
    getUsers() {
      return this.users;
    }
  },

  actions: {
    changeUserById(id, data) {
      const user = this.users.find((item) => item.id === id);

      user.fullName = data.fullName;
      user.email = data.email;
      user.number = data.number;
    }
  }
});

export default useUserStore;
