<template>
  <div>
    <div class="todo-list-modal">
      <h3>Задачи пользователя</h3>
      <h4>{{ fullName }}:</h4>

      <div class="tasks-container">
        <p v-if="props.todo.length === 0" class="no-tasks">НЕТ ЗАДАЧ</p>
        <div v-for="(task, i) in tasks" :key="task.id" class="task-container">
          <p>{{ i + 1 }}.</p>
          <input v-model="tasks[i].task" @input="onChange(tasks[i].task)" />
          <img
            class="status-icon"
            :src="task.done ? doneIcon : statusIcon"
            alt="status"
            @click="onStatusClick(task)"
          />
        </div>
      </div>
      <div class="buttons-container">
        <button class="btn-ok" :disabled="btnDisabled" @click="onAccept(data)">
          Подтвердить
        </button>
        <button @click="ModalStore.setVisible(false)">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, readonly } from "vue";
import statusIcon from "../../../../public/status-icon.svg";
import doneIcon from "../../../../public/done-icon.svg";
import useModalStore from "../../../store/modules/ModalStore";
import useTodoStore from "../../../store/modules/TodoStore";

const props = defineProps({
  data: Object,
  todo: Array
});

//  props.data.fullName

const btnDisabled = ref(true);
const setButton = (boolean) => {
  btnDisabled.value = !boolean;
};

const ModalStore = useModalStore();
const TodoStore = useTodoStore();

const fullName = ref(props.data.fullName);
const tasks = ref(props.todo);

const onAccept = (data) => {
  TodoStore.changeTasksById(data.id, tasks);
  ModalStore.setVisible(false);
};

const onStatusClick = (task) => {
  task.done = !task.done;
  setButton(true);
};

const onChange = (field) => {
  btnDisabled.value = !field.replaceAll(" ", "");
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables";
@import "/src/styles/mixins";

.todo-list-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 24px;
  color: #949494;
}

h4 {
  font-size: 24px;
  margin-bottom: 40px;
}

input {
  @include input-main;
  margin: 0 10px;
  width: 400px;
}

.buttons-container {
  display: flex;
  gap: 40px;

  button {
    @include button-main;
  }

  button:hover {
    background-color: yellow;
    color: black;
  }

  button:disabled {
    opacity: 0.3;
    background-color: $light-grey;
    color: white;
  }
}

.tasks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;

  p {
    font-size: 18px;
  }

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
}

.no-tasks {
  font-weight: 700;
  opacity: 0.3;
}
</style>
