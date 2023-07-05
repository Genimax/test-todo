<template>
  <div>
    <div id="user_settings_modal">
      <h3>Задачи пользователя:</h3>

      <div>
        <p>Email:</p>
        <input />
      </div>
      <div>
        <p>Имя:</p>
        <input />
      </div>
      <div>
        <p>Номер:</p>
        <input />
      </div>
      <div class="buttons-container">
        <button class="btn-ok">Подтвердить</button>
        <button @click="ModalStore.setVisible(false)">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import useModalStore from "../../../store/modules/ModalStore";

export default {
  setup() {
    const ModalStore = useModalStore();

    return {
      ModalStore
    };
  }
};
</script>
