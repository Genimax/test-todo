<script setup>
import useUserStore from "../store/modules/UserStore.js";
import useModalStore from "../store/modules/ModalStore.js";
import ModalTypes from "../utils/ModalTypes.js";

import todoIcon from "../../public/todo-list-icon.svg";
import userIcon from "../../public/user-settings.svg";

const userStore = useUserStore();
const modalStore = useModalStore();

const userListener = (id, modalType) => {
  const data = userStore.getUsers.find((item) => item.id === id);
  modalStore.setModalProps(modalType, data);
  modalStore.setVisible(true);
};
</script>

<template>
  <div class="main-container">
    <div class="main-list">
      <div v-for="user in userStore.getUsers" :key="user.id">
        <p>{{ user.fullName }}</p>
        <div>
          <img
            :src="todoIcon"
            alt="todo icon"
            @click="userListener(user.id, ModalTypes.ToDoList)"
          />
          <img
            :src="userIcon"
            alt="user icon"
            @click="userListener(user.id, ModalTypes.UserSettings)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables";

.main-container {
  display: flex;
  flex-direction: column;
  padding: 50px 25px;
  border-radius: 30px;
  width: 40vw;
  align-self: center;
  background-color: $grey;

  .main-list {
    padding: 0 35px;
    height: 70vh;
    overflow-y: auto;
    scrollbar-track-color: white;

    div {
      height: 40px;
      display: flex;
      padding: 0 17px;
      align-items: center;
      border-radius: 10px;
      justify-content: space-between;
      font-size: 20px;

      p {
        max-width: 70%;
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        cursor: initial;
        padding-right: 17px;
      }

      div {
        display: none;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;

        img {
          width: 21px;
          height: 21px;
          cursor: pointer;
        }
      }
    }

    div:hover {
      background-color: $light-grey;
      position: relative;

      div {
        display: flex;
        position: absolute;
        right: 5px;
      }
    }
  }
}

.main-list::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
  background-color: $dark-grey;
}

.main-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background: $dark-grey;
}

.main-list::-webkit-scrollbar-thumb {
  background: $light-grey;
  border-radius: 10px;
}

@media (max-width: 1280px) {
  .main-container {
    width: 490px;

    .main-list {
      height: 60vh;
    }
  }
}

@media (max-width: 610px) {
  .main-container {
    width: 300px;

    .main-list {
      padding: 0 5px;
      div {
        padding: 0;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        font-size: 20px;
        p {
          cursor: initial;
          padding: 5px 0 0;
          height: 40px;
          max-width: 100%;
          word-wrap: normal;
          word-break: normal;
          overflow: auto;
        }

        div {
          display: flex;
          flex-direction: row;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      div:hover {
        div {
          display: flex;
          position: relative;
          right: 0;
        }
      }
    }
  }
}
</style>
