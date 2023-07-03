<script>
import ModalWindow from "./UI/Modal.vue";
import ModalTypes from "../utils/ModalTypes.js";

export default {
  components: { ModalWindow },
  data() {
    return {
      modal: ModalWindow,
      modalShow: true,
      modalSettings: {
        type: ModalTypes.UserSettings, // ПОЗЖЕ ЗАМЕНИТЬ НА ЗАВИСИМОСТЬ ОТ КНОПКИ
        data: {}
      }
    };
  }
};
</script>

<template>
  <keep-alive>
    <component :is="modal" v-model:show="modalShow" :settings="modalSettings" />
  </keep-alive>
  <h1>USERS</h1>
</template>
