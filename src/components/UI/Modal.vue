<template>
  <div
    v-if="ModalStore.getModalSettings.show"
    class="modal-window"
    @click.stop="ModalStore.setVisible(false)"
  >
    <component
      :is="selectModal()"
      :data="ModalStore.modalProps.data"
      class="modal-content"
      @click.stop
    ></component>
  </div>
</template>

<script setup>
import useModalStore from "../../store/modules/ModalStore";
import ModalPaymentDetails from "./Modals/ModalPaymentDetails.vue";
import ModalUserSettings from "./Modals/ModalUserSettings.vue";
import ModalTodoList from "./Modals/ModalTodoList.vue";

const ModalStore = useModalStore();

const selectModal = () => {
  const components = {
    ModalPaymentDetails,
    ModalUserSettings,
    ModalTodoList
  };
  return components[ModalStore.modalProps.type];
};
</script>

<style lang="scss">
@import "/src/styles/variables";
@import "/src/styles/mixins";

.modal-window {
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: flex;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background: $grey;
    border-radius: 12px;
    padding: 30px 103px;
    outline: none;
  }
}

@media (max-width: 770px) {
  .modal-window {
    .modal-content {
      padding: 20px;
    }
  }
}
</style>
