<template>
  <div
    v-if="ModalStore.getModalSettings.show"
    class="modal-window"
    @click.stop="() => ModalStore.setVisible(false)"
  >
    <component
      :is="ModalStore.getModalSettings.modalProps.type"
      :data="ModalStore.getModalSettings.modalProps.data"
      class="modal-content"
      @click.stop
    ></component>
  </div>
</template>

<script>
import useModalStore from "../../store/modules/ModalStore";
import ModalUserSettings from "./Modals/ModalUserSettings.vue";
import ModalTodoList from "./Modals/ModalTodoList.vue";
import ModalPaymentDetails from "./Modals/ModalPaymentDetails.vue";

export default {
  components: {
    ModalTodoList,
    ModalUserSettings,
    ModalPaymentDetails
  },
  setup() {
    const ModalStore = useModalStore();

    return {
      ModalStore
    };
  }
};
</script>

<style scoped></style>
