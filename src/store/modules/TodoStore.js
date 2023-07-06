import { defineStore } from "pinia";
import generateTodoLists from "../../utils/todoGenerator";

const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      lists: generateTodoLists(100)
    };

    // {id: [{task, done}]}
  },

  getters: {
    getTasksById() {
      const { lists } = this;
      return (id) => {
        return lists[id];
      };
    }
  },

  actions: {
    changeTasksById(id, data) {
      this[id] = data;
    }
  }
});

export default useTodoStore;
