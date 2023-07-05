<script>
import useUserStore from "../store/modules/UserStore";
import useModalStore from "../store/modules/ModalStore";
import ModalTypes from "../utils/ModalTypes";

import todoIcon from "../../public/todo-list-icon.svg";
import userIcon from "../../public/user-settings.svg";

export default {
  setup() {
    const userStore = useUserStore();
    const modalStore = useModalStore();

    const userListener = (id) => {
      const data = userStore.getUsers.find((item) => item.id === id);
      modalStore.setModalProps(ModalTypes.UserSettings, data);
      modalStore.setVisible(true);
    };
    return { users: userStore.users, todoIcon, userIcon, userListener };
  }
};
</script>

<template>
  <div id="users_container">
    <div id="users_list">
      <div v-for="user in users" :key="user.id">
        <p>{{ user.fullName }}</p>
        <div>
          <img :src="todoIcon" alt="todo icon" />
          <img
            :src="userIcon"
            alt="user Icon"
            @click="
              () => {
                userListener(user.id);
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
