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
        type: ModalTypes.PaymentDetails,
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
  <h1>PAYMENTS</h1>
</template>
