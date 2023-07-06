<template>
  <div>
    <div class="user-settings-modal">
      <h3>Задачи пользователя:</h3>

      <div>
        <p>Email:</p>
        <input v-model="modalData.email" @input="onChange(modalData.email)" />
      </div>
      <div>
        <p>Имя:</p>
        <input
          v-model="modalData.fullName"
          @input="onChange(modalData.fullName)"
        />
      </div>
      <div>
        <p>Номер:</p>
        <input v-model="modalData.number" @input="onChange(modalData.number)" />
      </div>
      <div class="buttons-container">
        <button
          class="btn-ok"
          :disabled="btnDisabled"
          @click="onAccept(props.data)"
        >
          Подтвердить
        </button>
        <button @click="ModalStore.setVisible(false)">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import useModalStore from "../../../store/modules/ModalStore";
import useUserStore from "../../../store/modules/UserStore";

const props = defineProps({
  data: Object
});

const modalData = reactive({
  fullName: props.data.fullName,
  number: props.data.number,
  email: props.data.email
});

const btnDisabled = ref(true);

const ModalStore = useModalStore();
const UserStore = useUserStore();

const onAccept = (data) => {
  UserStore.changeUserById(data.id, modalData);
  ModalStore.setVisible(false);
};

const onChange = (field) => {
  btnDisabled.value = !field.replaceAll(" ", "");
};
</script>

<style lang="scss" scoped>
@import "/src/styles/mixins";
@import "/src/styles/variables";

.user-settings-modal {
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #949494;
    text-align: center;
    margin-bottom: 50px;
  }

  div {
    width: 480px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 18px;
    }

    input {
      @include input-main;
      width: 70%;
    }
  }

  .buttons-container {
    padding-top: 40px;
    justify-content: space-around;

    button {
      @include button-main;
    }

    button:hover {
      color: black;
      background-color: yellow;
    }

    button:disabled {
      @include button-main;
      opacity: 0.3;
    }
  }
}
</style>
