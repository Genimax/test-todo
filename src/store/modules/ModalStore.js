import { defineStore } from "pinia";
import ModalTypes from "../../utils/ModalTypes";

const useModalStore = defineStore("modalStore", {
  state: () => ({
    show: false,
    modalProps: {
      type: ModalTypes.UserSettings,
      data: {}
    }
  }),

  getters: {
    getModalSettings() {
      return { show: this.show, modalProps: this.modalProps };
    }
  },

  actions: {
    setModalProps(type, data) {
      this.modalProps.type = type;
      this.modalProps.data = data;
    },

    setVisible(option) {
      this.show = option;
    }
  }
});

export default useModalStore;
