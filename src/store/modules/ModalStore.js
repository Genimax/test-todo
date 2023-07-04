import { defineStore } from "pinia";
import ModalTypes from "../../utils/ModalTypes";

const useModalStore = defineStore("modalStore", {
  state: () => ({
    show: true,
    modalProps: {
      type: ModalTypes.UserSettings
    }
  }),

  getters: {
    getModalSettings() {
      return { show: this.show, modalProps: this.modalProps };
    }
  },

  actions: {
    setModalProps(props) {
      this.modalProps = props;
    },

    setVisible(option) {
      this.show = option;
    }
  }
});

export default useModalStore;
