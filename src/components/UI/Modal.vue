<template>
  <div v-if="show" class="modal-window" @click.stop="hideModal">
    <div class="modal-content" @click.stop>
      {{ modalRender(settings.type) }}
    </div>
  </div>
</template>

<script>
import ModalTypes from "../../utils/ModalTypes.js";

export default {
  name: "ModalWindow",

  props: {
    show: {
      required: true,
      type: Boolean,
      default: false
    },

    settings: {
      type: Object,
      required: true,
      default: () => ({
        type: "",
        data: {}
      })
    }
  },
  emits: ["update:show"],
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
    modalRender(type) {
      if (type === ModalTypes.UserSettings) {
        return "settings";
      }

      if (type === ModalTypes.ToDoList) {
        return "todolist";
      }

      if (type === ModalTypes.PaymentDetails) {
        return "PaymentDetails";
      }

      return "";
    }
  }
};
</script>

<style scoped></style>
