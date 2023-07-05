<template>
  <div>
    <div id="user_settings_modal">
      <h3>Изменение пользователя:</h3>

      <div>
        <p>Email:</p>
        <input v-model="modalData.email" />
      </div>
      <div>
        <p>Имя:</p>
        <input v-model="modalData.fullName" />
      </div>
      <div>
        <p>Номер:</p>
        <input v-model="modalData.number" />
      </div>
      <div class="buttons-container">
        <button class="btn-ok" @click="onAccept(props.data)">
          Подтвердить
        </button>
        <button @click="ModalStore.setVisible(false)">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
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

const ModalStore = useModalStore();
const UserStore = useUserStore();

const onAccept = (data) => {
  UserStore.changeUserById(data.id, modalData);
  ModalStore.setVisible(false);
};
</script>
