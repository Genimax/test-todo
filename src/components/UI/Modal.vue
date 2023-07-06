<template>
  <div
    v-if="ModalStore.getModalSettings.show"
    class="modal-window"
    @click.stop="ModalStore.setVisible(false)"
  >
    <ModalUserSettings
      v-if="
        ModalStore.getModalSettings.modalProps.type === ModalTypes.UserSettings
      "
      :data="ModalStore.getModalSettings.modalProps.data"
      class="modal-content"
      @click.stop
    ></ModalUserSettings>
    <ModalTodoList
      v-if="ModalStore.getModalSettings.modalProps.type === ModalTypes.ToDoList"
      :data="ModalStore.getModalSettings.modalProps.data"
      :todo="
        TodoStore.getTasksById(ModalStore.getModalSettings.modalProps.data.id)
      "
      class="modal-content"
      @click.stop
    ></ModalTodoList>
    <ModalPaymentDetails
      v-if="
        ModalStore.getModalSettings.modalProps.type ===
        ModalTypes.PaymentDetails
      "
      :data="ModalStore.getModalSettings.modalProps.data"
      class="modal-content"
      @click.stop
    ></ModalPaymentDetails>
  </div>
</template>

<script setup>
import useModalStore from "../../store/modules/ModalStore";
import useTodoStore from "../../store/modules/TodoStore";
import ModalTypes from "../../utils/ModalTypes";
import ModalPaymentDetails from "./Modals/ModalPaymentDetails.vue";
import ModalUserSettings from "./Modals/ModalUserSettings.vue";
import ModalTodoList from "./Modals/ModalTodoList.vue";

const ModalStore = useModalStore();
const TodoStore = useTodoStore();
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
  }
}
</style>
