<template>
  <div>
    <div id="user_settings_modal">
      <h3>Изменение пользователя:</h3>

      <div>
        <p>Email:</p>
        <input v-model="data.email" />
      </div>
      <div>
        <p>Имя:</p>
        <input v-model="data.fullName" />
      </div>
      <div>
        <p>Номер:</p>
        <input v-model="data.number" />
      </div>
      <div class="buttons-container">
        <button class="btn-ok">Подтвердить</button>
        <button @click="() => ModalStore.setVisible(false)">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import useModalStore from "../../../store/modules/ModalStore";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    const ModalStore = useModalStore();

    return {
      ModalStore
    };
  },
  data() {
    return {
      fullName: "",
      email: "",
      number: ""
    };
  },
  created() {
    this.fullName = this.data.fullName;
    this.email = this.data.email;
    this.number = this.data.number;
  }
};
</script>
