<template>
  <div>
    <div class="user-settings-modal">
      <h3>Информация о платеже</h3>
      <h4>№{{ payment.number }}:</h4>
      <div class="data-container">
        <div>
          <p class="p-title">ID Платежа:</p>
          <p>P-{{ payment.paymentId }}</p>
        </div>
        <div>
          <p class="p-title">Дата:</p>
          <p>{{ payment.date }}</p>
        </div>
        <div>
          <p class="p-title">Время:</p>
          <p>{{ payment.time }}</p>
        </div>
        <div>
          <p class="p-title">Сумма:</p>
          <p>$ {{ payment.sum }}</p>
        </div>
        <div>
          <p class="p-title">Отправитель:</p>
          <p>{{ user.fullName }}</p>
        </div>
        <div>
          <p class="p-title">Статус:</p>
          <p>{{ payment.status }}</p>
        </div>
      </div>
      <button @click="() => ModalStore.setVisible(false)">Назад</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useModalStore from "../../../store/modules/ModalStore";
import useUserStore from "../../../store/modules/UserStore";

const UserStore = useUserStore();
const ModalStore = useModalStore();

const payment = reactive(ModalStore.modalProps.data);
const user = reactive(UserStore.getUserById(payment.sender));
</script>

<style lang="scss" scoped>
@import "/src/styles/variables";
@import "/src/styles/mixins";

.user-settings-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3,
h4 {
  font-size: 24px;
  color: #949494;
}

.p-title {
  color: grey;
}

h4 {
  padding-top: 10px;
  color: white;
  margin-bottom: 30px;
}

.data-container {
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-width: 440px;
  margin-bottom: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
p {
  font-size: 18px;
  max-width: 220px;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
}

button {
  @include button-main;
}

button:hover {
  background-color: yellow;
  color: black;
}

@media (max-width: 770px) {
  .user-settings-modal {
    h3,
    h4 {
      font-size: 18px;
    }
  }
  .data-container {
    min-width: 300px;

    div {
      flex-direction: column;
    }
  }
}
</style>
