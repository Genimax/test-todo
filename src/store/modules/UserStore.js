import { defineStore } from "pinia";
import usersGenerator from "../../utils/usersGenerator";

const useUserStore = defineStore("userStore", {
  state: () => ({
    users: usersGenerator(100)
  }),

  getters: {
    getUsers() {
      return this.users;
    },

    getUserById() {
      const { users } = this;
      return (id) => {
        return users.find((user) => user.id === id);
      };
    }
  },

  actions: {
    changeUserById(id, data) {
      const user = this.users.find((user) => user.id === id);

      user.fullName = data.fullName;
      user.email = data.email;
      user.number = data.number;
    }
  }
});

export default useUserStore;
